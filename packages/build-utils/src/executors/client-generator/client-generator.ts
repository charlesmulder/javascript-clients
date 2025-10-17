import { ExecutorContext } from '@nx/devkit';
import { execSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import { z } from 'zod';

const ClientGeneratorSchema = z.object({
  specs: z.record(z.string(), z.string()),
  postProcess: z.string().optional(),
  legacyGenerator: z.boolean().optional(),
  clean: z.boolean().optional().default(true),
});

export type ClientGeneratorSchemaType = z.infer<typeof ClientGeneratorSchema>;

/**
 * Cleans previously generated files before regenerating new ones.
 *
 * This function replicates the cleanup functionality available in OpenAPI Generator's
 * `batch` command (--clean flag), which is not available in the `generate` command that we use.
 *
 * How it works:
 * - Reads the `.openapi-generator/FILES` file which tracks all previously generated files
 * - Removes each file listed in that FILES file from the filesystem
 * - This prevents stale files from accumulating when the API spec changes
 *
 * Comparison with OpenAPI Generator's native cleanup:
 * - Batch command cleanup: Available via `openapi-generator-cli batch --clean`
 *   - Reads .openapi-generator/FILES and deletes listed files
 *   - Requires using batch command with external config files
 *   - Same file-based approach, same limitations
 * - Generate command: No cleanup functionality available
 *
 * Known limitations (shared with native batch cleanup):
 * - Only removes files explicitly listed in the FILES file
 * - Does NOT remove "orphaned directories" that exist on filesystem but aren't tracked
 *   (e.g., old endpoint directories when endpoints are removed from the OpenAPI spec)
 * - Legacy generator packages don't create FILES files, so cleanup is silently skipped
 *
 * @param targetPath - Root path of the package being generated
 * @param dir - Subdirectory within the package (e.g., 'v2' for multi-spec packages, '.' for root)
 */
function cleanGeneratedFiles(targetPath: string, dir: string) {
  const filesPath = path.join(targetPath, dir, '.openapi-generator', 'FILES');
  if (fs.existsSync(filesPath)) {
    console.log(`Cleaning previously generated files in ${dir === '.' ? 'root' : dir}...`);
    const files = fs.readFileSync(filesPath, 'utf-8')
      .split('\n')
      .filter(f => f.trim());

    files.forEach(file => {
      const fullPath = path.join(targetPath, dir, file);
      if (fs.existsSync(fullPath)) {
        console.log(`  Removing: ${file}`);
        fs.rmSync(fullPath, { recursive: true, force: true });
      }
    });
  }
}

function generateClient(targetPath: string, spec: string, dir: string, isLegacy?: boolean) {
  let additionalArgs: string;
  if (isLegacy) {
    additionalArgs = '-g typescript-axios';
  } else {
    additionalArgs =
      '--custom-generator=target/typescript-axios-webpack-module-federation-openapi-generator-1.0.0.jar -g typescript-axios-webpack-module-federation';
  }
  execSync(
    `TS_POST_PROCESS_FILE='./postProcess.sh' openapi-generator-cli generate -i ${spec} -o ${targetPath}/${dir} --openapitools ${targetPath}/openapitools.json --skip-validate-spec --enable-post-process-file ${additionalArgs}`,
    { stdio: 'inherit' },
  );
}

export default async function generateClients(options: ClientGeneratorSchemaType, context: ExecutorContext) {
  const result = ClientGeneratorSchema.safeParse(options);
  if (!result?.success) {
    console.error(result?.error);
    throw new Error('invalid options passed to client-generator executor');
  }

  if (!context.projectName) {
    throw new Error('Project name is not defined in the executor context');
  }

  const targetPath = context.projectsConfigurations?.projects[context.projectName]?.root;

  if (!targetPath) {
    console.error('Available projects:', Object.keys(context.projectsConfigurations?.projects || {}));
    console.error('Looking for project:', context.projectName);
    throw new Error(`Unable to find project root for project: ${context.projectName}`);
  }

  // Clean before generation (if enabled)
  if (options.clean !== false) { // Default to true
    console.log('Cleaning previously generated files...');
    Object.keys(options.specs).forEach((specName) => {
      const dir = specName !== 'default' ? specName : '.';
      cleanGeneratedFiles(targetPath, dir);
    });
  }

  // Generate clients
  Object.keys(options.specs).forEach((specName) => {
    let specPath = options.specs[specName];
    if (specPath.indexOf('http://') < 0 && specPath.indexOf('https://') < 0) {
      specPath = path.join(targetPath, specPath);
    }
    if (specName !== 'default') {
      generateClient(targetPath, specPath, specName, options.legacyGenerator);
    } else {
      generateClient(targetPath, specPath, '.', options.legacyGenerator);
    }
  });

  if (options.postProcess) {
    execSync(`cd ${targetPath} && ${options.postProcess}`, { stdio: 'inherit' });
  }

  return {
    success: true,
  };
}
