#!/usr/bin/env node

const { runExportTests } = require('../../build-utils/src/export-test-utils.cjs');

runExportTests('@redhat-cloud-services/host-inventory-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/host-inventory-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/host-inventory-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/host-inventory-client/types' },

  // Sample specific endpoint imports
  { description: 'ApiHostGetHostList endpoint', importPath: '@redhat-cloud-services/host-inventory-client/ApiHostGetHostList' },
  { description: 'ApiHostGetHostById endpoint', importPath: '@redhat-cloud-services/host-inventory-client/ApiHostGetHostById' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/host-inventory-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/host-inventory-client/nonexistent', shouldFail: true }
]);