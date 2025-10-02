#!/usr/bin/env node

import { runExportTests } from '@redhat-cloud-services/build-utils';

runExportTests('@redhat-cloud-services/remediations-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/remediations-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/remediations-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/remediations-client/types' },

  // Sample specific endpoint imports
  { description: 'CreateRemediation endpoint', importPath: '@redhat-cloud-services/remediations-client/CreateRemediation' },
  { description: 'BulkGetRemediationPlaybook endpoint', importPath: '@redhat-cloud-services/remediations-client/BulkGetRemediationPlaybook' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/remediations-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/remediations-client/nonexistent', shouldFail: true },
]);
