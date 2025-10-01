#!/usr/bin/env node

const { runExportTests } = require('../../../utils/export-test-utils');

runExportTests('@redhat-cloud-services/sources-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/sources-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/sources-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/sources-client/types' },

  // Sample specific endpoint imports
  { description: 'CreateApplication endpoint', importPath: '@redhat-cloud-services/sources-client/CreateApplication' },
  { description: 'ListSources endpoint', importPath: '@redhat-cloud-services/sources-client/ListSources' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/sources-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/sources-client/nonexistent', shouldFail: true }
]);