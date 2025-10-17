import { describe, expect, test } from '@jest/globals';

// imports of API-specific classes
import { NotificationsClient } from '../../api';
import { NotificationResourceV2V2GetLinkedBehaviorGroupsParams } from '../../NotificationResourceV2V2GetLinkedBehaviorGroups';

// client path from spec
const BASE_PATH = 'http://localhost:3002/api/notifications/v2.0';

const client = NotificationsClient(BASE_PATH);

describe('Notifications v2.0', () => {
  test('Get linked behavior groups', async () => {
    const params: NotificationResourceV2V2GetLinkedBehaviorGroupsParams = {
      eventTypeId: 'test-event-type-id',
    };
    const resp = await client.notificationResourceV2V2GetLinkedBehaviorGroups(params);
    expect(resp.status).toBe(200);
  });
});
