#!/usr/bin/env node

import { runExportTests } from '../../../utils/export-test-utils';

runExportTests('@redhat-cloud-services/insights-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/insights-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/insights-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/insights-client/types' },

  // Sample specific endpoint imports
  { description: 'AccountList endpoint', importPath: '@redhat-cloud-services/insights-client/AccountList' },
  { description: 'AccountRetrieve endpoint', importPath: '@redhat-cloud-services/insights-client/AccountRetrieve' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/insights-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/insights-client/nonexistent', shouldFail: true }
]);