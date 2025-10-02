#!/usr/bin/env node

import { runExportTests } from '@redhat-cloud-services/build-utils';

runExportTests('@redhat-cloud-services/notifications-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/notifications-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/notifications-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/notifications-client/types' },

  // Sample specific endpoint imports
  {
    description: 'DrawerResourceV1GetDrawerEntries endpoint',
    importPath: '@redhat-cloud-services/notifications-client/DrawerResourceV1GetDrawerEntries',
  },
  { description: 'EventResourceV1GetEvents endpoint', importPath: '@redhat-cloud-services/notifications-client/EventResourceV1GetEvents' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/notifications-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/notifications-client/nonexistent', shouldFail: true },
]);
