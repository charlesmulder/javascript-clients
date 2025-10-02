#!/usr/bin/env node

import { runExportTests } from '../../build-utils/src/export-test-utils.mjs';

runExportTests('@redhat-cloud-services/policies-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/policies-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/policies-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/policies-client/types' },

  // Sample specific endpoint imports
  { description: 'DeletePoliciesById endpoint', importPath: '@redhat-cloud-services/policies-client/DeletePoliciesById' },
  { description: 'GetPolicies endpoint', importPath: '@redhat-cloud-services/policies-client/GetPolicies' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/policies-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/policies-client/nonexistent', shouldFail: true }
]);