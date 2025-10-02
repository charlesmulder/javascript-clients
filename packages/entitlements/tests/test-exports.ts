#!/usr/bin/env node

import { runExportTests } from '../../../utils/export-test-utils';

runExportTests('@redhat-cloud-services/entitlements-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/entitlements-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/entitlements-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/entitlements-client/types' },

  // Sample specific endpoint imports
  { description: 'ServicesGet endpoint', importPath: '@redhat-cloud-services/entitlements-client/ServicesGet' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/entitlements-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/entitlements-client/nonexistent', shouldFail: true },
]);
