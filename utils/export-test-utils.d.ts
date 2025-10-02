#!/usr/bin/env node
/**
 * TypeScript utilities for testing package exports across all client packages
 * Validates that expected import paths work correctly with TypeScript compilation
 */
interface TestCase {
    description: string;
    importPath: string;
    expectedType?: string;
    shouldFail?: boolean;
}
declare function testImport(description: string, importPath: string, expectedType?: string): Promise<boolean>;
declare function testImportShouldFail(description: string, importPath: string): Promise<boolean>;
export declare function runExportTests(packageName: string, tests: TestCase[]): Promise<void>;
export { testImport, testImportShouldFail };
//# sourceMappingURL=export-test-utils.d.ts.map