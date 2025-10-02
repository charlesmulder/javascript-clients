#!/usr/bin/env node

import { runExportTests } from '../../../utils/export-test-utils.mjs';

runExportTests('@redhat-cloud-services/rbac-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/rbac-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/rbac-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/rbac-client/types' },

  // Sample specific endpoint imports
  { description: 'AddPrincipalToGroup endpoint', importPath: '@redhat-cloud-services/rbac-client/AddPrincipalToGroup' },
  { description: 'CreateGroup endpoint', importPath: '@redhat-cloud-services/rbac-client/CreateGroup' },
  { description: 'GetGroup endpoint', importPath: '@redhat-cloud-services/rbac-client/GetGroup' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/rbac-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/rbac-client/nonexistent', shouldFail: true }
]);