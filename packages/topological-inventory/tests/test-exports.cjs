#!/usr/bin/env node

const { runExportTests } = require('../../build-utils/src/export-test-utils.cjs');

runExportTests('@redhat-cloud-services/topological-inventory-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/topological-inventory-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/topological-inventory-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/topological-inventory-client/types' },

  // Sample specific endpoint imports
  { description: 'ListServiceInstances endpoint', importPath: '@redhat-cloud-services/topological-inventory-client/ListServiceInstances' },
  { description: 'ShowServiceInstance endpoint', importPath: '@redhat-cloud-services/topological-inventory-client/ShowServiceInstance' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/topological-inventory-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/topological-inventory-client/nonexistent', shouldFail: true }
]);