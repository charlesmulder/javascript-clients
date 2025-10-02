#!/usr/bin/env node

const { runExportTests } = require('../../build-utils/dist/src/export-test-utils.cjs');

runExportTests('@redhat-cloud-services/patch-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/patch-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/patch-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/patch-client/types' },

  // Sample specific endpoint imports
  { description: 'ExportAdvisories endpoint', importPath: '@redhat-cloud-services/patch-client/ExportAdvisories' },
  { description: 'ExportSystems endpoint', importPath: '@redhat-cloud-services/patch-client/ExportSystems' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/patch-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/patch-client/nonexistent', shouldFail: true }
]);