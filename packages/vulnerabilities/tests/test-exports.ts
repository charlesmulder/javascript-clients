#!/usr/bin/env node

import { runExportTests } from '../../../utils/export-test-utils';

runExportTests('@redhat-cloud-services/vulnerabilities-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/vulnerabilities-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/vulnerabilities-client/api' },

  // Note: vulnerabilities package doesn't have separate types export or individual endpoint exports
  // It uses a different structure than other packages

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/vulnerabilities-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/vulnerabilities-client/nonexistent', shouldFail: true },
]);
