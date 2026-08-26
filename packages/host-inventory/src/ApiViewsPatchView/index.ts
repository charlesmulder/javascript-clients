import type { AxiosPromise, AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { COLLECTION_FORMATS, RequiredError, AuthTypeEnum, DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '@redhat-cloud-services/javascript-clients-shared/common';
import type { RequestArgs } from '@redhat-cloud-services/javascript-clients-shared/common';
import { BaseAPI } from '@redhat-cloud-services/javascript-clients-shared/base';
import { Configuration } from '@redhat-cloud-services/javascript-clients-shared/configuration';

import type { ViewOut, ViewPatch } from '../types';


export type ApiViewsPatchViewParams = {
  /**
  * View ID.
  * @type { string }
  * @memberof ApiViewsPatchViewApi
  */
  viewId: string,
  /**
  * Data with which to update the inventory view.
  * @type { ViewPatch }
  * @memberof ApiViewsPatchViewApi
  */
  viewPatch: ViewPatch,
  options?: AxiosRequestConfig
}

export type ApiViewsPatchViewReturnType = ViewOut;

const isApiViewsPatchViewObjectParams = (params: [ApiViewsPatchViewParams] | unknown[]): params is [ApiViewsPatchViewParams] => {
  const l = params.length === 1
  if(l && typeof params[0] === 'object' && !Array.isArray(params[0])) {
    return true && Object.prototype.hasOwnProperty.call(params[0], 'viewId') && Object.prototype.hasOwnProperty.call(params[0], 'viewPatch')
  }
  return false
}
/**
* Updates an existing inventory view\'s name, description, configuration, or sharing settings. Only the view creator can update a view. System views cannot be updated. <br /><br /> Required permissions: inventory:views:write
* @summary Update an inventory view
* @param {ApiViewsPatchViewParams} config with all available params.
* @param {*} [options] Override http request option.
* @throws {RequiredError}
*/
export const apiViewsPatchViewParamCreator = async (sendRequest: BaseAPI["sendRequest"], ...config: ([ApiViewsPatchViewParams] | [string, ViewPatch, AxiosRequestConfig])) => {
    const params = isApiViewsPatchViewObjectParams(config) ? config[0] : ['viewId', 'viewPatch', 'options'].reduce((acc, curr, index) => ({ ...acc, [curr]: config[index] }), {}) as ApiViewsPatchViewParams;
    const { viewId, viewPatch, options = {} } = params;
    const localVarPath = `/beta/views/{view_id}`
        .replace(`{${"view_id"}}`, encodeURIComponent(String(viewId)));
    // use dummy base URL string because the URL constructor only accepts absolute URLs.
    const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
    const localVarRequestOptions = { method: 'PATCH' as Method, ...options};
    const localVarHeaderParameter = {} as any;
    const localVarQueryParameter = {} as any;



    localVarHeaderParameter['Content-Type'] = 'application/json';

    setSearchParams(localVarUrlObj, localVarQueryParameter);
    localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

    const args = {
        urlObj: localVarUrlObj,
        options: localVarRequestOptions,
        serializeData: viewPatch,
        auth:[
        {
        // authentication ApiKeyAuth required
        // in header with key required
        authType: AuthTypeEnum.InHeader,
        authKey: "x-rh-identity"
        }
        ]
    };

    return sendRequest<ApiViewsPatchViewReturnType>(Promise.resolve(args));
}

export default apiViewsPatchViewParamCreator;
