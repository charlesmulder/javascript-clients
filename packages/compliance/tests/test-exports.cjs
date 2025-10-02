#!/usr/bin/env node

const { runExportTests } = require('../../build-utils/dist/src/export-test-utils.cjs');

runExportTests('@redhat-cloud-services/compliance-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/compliance-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/compliance-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/compliance-client/types' },

  // Sample specific endpoint imports
  { description: 'AssignRule endpoint', importPath: '@redhat-cloud-services/compliance-client/AssignRule' },
  { description: 'CreatePolicy endpoint', importPath: '@redhat-cloud-services/compliance-client/CreatePolicy' },
  { description: 'Systems endpoint', importPath: '@redhat-cloud-services/compliance-client/Systems' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/compliance-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/compliance-client/nonexistent', shouldFail: true }
]);