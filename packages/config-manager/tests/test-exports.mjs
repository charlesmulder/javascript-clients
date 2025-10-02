#!/usr/bin/env node

import { runExportTests } from '../../build-utils/dist/src/export-test-utils.mjs';

runExportTests('@redhat-cloud-services/config-manager-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/config-manager-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/config-manager-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/config-manager-client/types' },

  // Sample specific endpoint imports (will verify actual endpoints exist)
  { description: 'CreateProfile endpoint', importPath: '@redhat-cloud-services/config-manager-client/CreateProfile' },
  { description: 'GetProfiles endpoint', importPath: '@redhat-cloud-services/config-manager-client/GetProfiles' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/config-manager-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/config-manager-client/nonexistent', shouldFail: true }
]);