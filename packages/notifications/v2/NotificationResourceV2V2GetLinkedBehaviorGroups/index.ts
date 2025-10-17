// @ts-ignore
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
// @ts-ignore
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/dist/common';
// @ts-ignore
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/dist/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/dist/configuration';

// @ts-ignore
import type { PageBehaviorGroup } from '../types';


export type NotificationResourceV2V2GetLinkedBehaviorGroupsParams = {
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2V2GetLinkedBehaviorGroupsApi
  */
  eventTypeId: any,
  /**
  * Number of items per page, if not specified 20 is used.
  * @type { any }
  * @memberof NotificationResourceV2V2GetLinkedBehaviorGroupsApi
  */
  limit?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2V2GetLinkedBehaviorGroupsApi
  */
  offset?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2V2GetLinkedBehaviorGroupsApi
  */
  pageNumber?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2V2GetLinkedBehaviorGroupsApi
  */
  sortBy?: any,
  /**
  *
  * @type { any }
  * @memberof NotificationResourceV2V2GetLinkedBehaviorGroupsApi
  */
  sortBy2?: any,
  options?: AxiosRequestConfig
}

export type NotificationResourceV2V2GetLinkedBehaviorGroupsReturnType = PageBehaviorGroup;

const isNotificationResourceV2V2GetLinkedBehaviorGroupsObjectParams = (params: [NotificationResourceV2V2GetLinkedBehaviorGroupsParams] | unknown[]): params is [NotificationResourceV2V2GetLinkedBehaviorGroupsParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'eventTypeId')
  }
  return false
}
/**
*
* @summary Retrieve the behavior groups linked to an event type.
* @param {NotificationResourceV2V2GetLinkedBehaviorGroupsParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const notificationResourceV2V2GetLinkedBehaviorGroupsParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([NotificationResourceV2V2GetLinkedBehaviorGroupsParams] | [any, any, any, any, any, any, AxiosRequestConfig])) => {
    const params = isNotificationResourceV2V2GetLinkedBehaviorGroupsObjectParams(config) ? config[0] : ['eventTypeId', 'limit', 'offset', 'pageNumber', 'sortBy', 'sortBy2', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as NotificationResourceV2V2GetLinkedBehaviorGroupsParams;
    const { eventTypeId, limit, offset, pageNumber, sortBy, sortBy2, options = {} } = params;
    const localVarPath = `/notifications/eventTypes/{eventTypeId}/behaviorGroups`
        .replace(`{${"eventTypeId"}}`, encodeURIComponent(String(eventTypeId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'GET' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;

    if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
    }

    if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset;
    }

    if (pageNumber !== undefined) {
        localVarQueryParameter['pageNumber'] = pageNumber;
    }

    if (sortBy !== undefined) {
        localVarQueryParameter['sortBy'] = sortBy;
    }

    if (sortBy2 !== undefined) {
        localVarQueryParameter['sort_by'] = sortBy2;
    }



    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
    };

    return sendRequest<NotificationResourceV2V2GetLinkedBehaviorGroupsReturnType>(Promise.resolve(args));
}

export default notificationResourceV2V2GetLinkedBehaviorGroupsParamCreator;
