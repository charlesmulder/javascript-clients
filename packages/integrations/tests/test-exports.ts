#!/usr/bin/env node

import { runExportTests } from '../../../utils/export-test-utils';

runExportTests('@redhat-cloud-services/integrations-client', [
  // Main exports
  { description: 'Root import', importPath: '@redhat-cloud-services/integrations-client' },
  { description: 'API import', importPath: '@redhat-cloud-services/integrations-client/api' },
  { description: 'Types import', importPath: '@redhat-cloud-services/integrations-client/types' },

  // Sample specific endpoint imports
  { description: 'EndpointResourceV1CreateEndpoint endpoint', importPath: '@redhat-cloud-services/integrations-client/EndpointResourceV1CreateEndpoint' },
  { description: 'EndpointResourceV1DeleteEndpoint endpoint', importPath: '@redhat-cloud-services/integrations-client/EndpointResourceV1DeleteEndpoint' },

  // Invalid paths should fail
  { description: 'Invalid path should fail', importPath: '@redhat-cloud-services/integrations-client/invalid', shouldFail: true },
  { description: 'Another invalid path should fail', importPath: '@redhat-cloud-services/integrations-client/nonexistent', shouldFail: true }
]);