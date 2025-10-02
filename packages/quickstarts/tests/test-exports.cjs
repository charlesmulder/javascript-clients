#!/usr/bin/env node

const { runExportTests } = require('../../build-utils/src/export-test-utils.cjs');

runExportTests('@redhat-cloud-services/quickstarts-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/quickstarts-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/quickstarts-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/quickstarts-client/types' },

  // Sample specific endpoint imports
  { description: 'QuickstartsGet endpoint', importPath: '@redhat-cloud-services/quickstarts-client/QuickstartsGet' },
  { description: 'FavoritesGet endpoint', importPath: '@redhat-cloud-services/quickstarts-client/FavoritesGet' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/quickstarts-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/quickstarts-client/nonexistent', shouldFail: true }
]);