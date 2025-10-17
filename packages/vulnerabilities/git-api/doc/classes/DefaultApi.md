[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / DefaultApi

# Class: DefaultApi

Defined in: [api.ts:6184](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6184)

DefaultApi - object-oriented interface

## Export

DefaultApi

## Extends

- `BaseAPI`

## Constructors

### Constructor

> **new DefaultApi**(`configuration?`, `basePath?`, `axios?`): `DefaultApi`

Defined in: [base.ts:51](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/base.ts#L51)

#### Parameters

##### configuration?

[`Configuration`](Configuration.md)

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`DefaultApi`

#### Inherited from

`BaseAPI.constructor`

## Properties

### axios

> `protected` **axios**: `AxiosInstance` = `globalAxios`

Defined in: [base.ts:51](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/base.ts#L51)

#### Inherited from

`BaseAPI.axios`

***

### basePath

> `protected` **basePath**: `string` = `BASE_PATH`

Defined in: [base.ts:51](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/base.ts#L51)

#### Inherited from

`BaseAPI.basePath`

***

### configuration

> `protected` **configuration**: [`Configuration`](Configuration.md) \| `undefined`

Defined in: [base.ts:49](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/base.ts#L49)

#### Inherited from

`BaseAPI.configuration`

## Methods

### deleteNotifications()

> **deleteNotifications**(`options?`): `Promise`\<`AxiosResponse`\<[`NotificationsOut`](../interfaces/NotificationsOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6192](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6192)

Use this endpoint for restarting your already obtained notifications for CVEs.

#### Parameters

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`NotificationsOut`](../interfaces/NotificationsOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getAffectedSystemsByCve()

> **getAffectedSystemsByCve**(`cveId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `statusId?`, `dataFormat?`, `uuid?`, `ruleKey?`, `rulePresence?`, `rule?`, `tags?`, `sapSids?`, `sapSystem?`, `showAdvisories?`, `advisory?`, `rhelVersion?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `report?`, `ansible?`, `mssql?`, `groupNames?`, `groupIds?`, `hostType?`, `options?`): `Promise`\<`AxiosResponse`\<[`AffectedSystemsOut`](../interfaces/AffectedSystemsOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6232](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6232)

This is a report of affected systems for a given CVE. Use this request to obtain server identification numbers of all affected servers along with last check-in, system name and more.

#### Parameters

##### cveId

`string`

CVE id.

##### filter?

`string`

Full text filter for the display name of system.

##### limit?

`number`

Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination.

##### offset?

`number`

Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### page?

`number`

Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### pageSize?

`number`

Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### sort?

`string`

Sorting used for response.

##### statusId?

`string`

Filer based on CVE status ID.

##### dataFormat?

`string`

Format of the output data, either JSON (default) or CSV.

##### uuid?

`string`

Filter based on UUID of inventory.

##### ruleKey?

`string`[]

Filters security rules by its error key.

##### rulePresence?

`boolean`[]

Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all.

##### rule?

`string`[]

Filters CVEs or systems by security rule, has two functionalities. If value is false, shows results without security rules, every other value is taken as rule error key.

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### sapSids?

`string`[]

List of SAP IDs to filter with

##### sapSystem?

`boolean`

Boolean value which shows systems managed by SAP.

##### showAdvisories?

`boolean`

If true shows advisories list

##### advisory?

`string`

Filter by advisory name, works only with show_advisories&#x3D;true

##### rhelVersion?

`string`

Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS.

##### firstReportedFrom?

`string`

Filter for CVEs/Systems where the vulnerability appeared after given date.

##### firstReportedTo?

`string`

Filter for CVEs/Systems where the vulnerability appeared before given date.

##### advisoryAvailable?

`boolean`[]

String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory.

##### remediation?

`string`

Filer based on available remediation type id.

##### report?

`boolean`

Needs to be used when endpoint data is used for report generation, checks RBAC permission for report and export feature.

##### ansible?

`boolean`

Boolean value which shows systems managed by Ansible Automation Platform.

##### mssql?

`boolean`

Boolean value which shows systems managed by MSSQL.

##### groupNames?

`string`[]

Names of the inventory groups.

##### groupIds?

`string`[]

IDs of the inventory groups.

##### hostType?

(`"rpmdnf"` \| `"image"` \| `"edge"`)[]

For filtering out the systems based on their type. Value \&quot;rpmdnf\&quot; for RPMDNF systems, \&quot;image\&quot; for image-mode systems.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AffectedSystemsOut`](../interfaces/AffectedSystemsOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getAffectedSystemsIdsByCve()

> **getAffectedSystemsIdsByCve**(`cveId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `statusId?`, `dataFormat?`, `uuid?`, `ruleKey?`, `rulePresence?`, `rule?`, `tags?`, `sapSids?`, `sapSystem?`, `showAdvisories?`, `advisory?`, `rhelVersion?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `ansible?`, `mssql?`, `groupNames?`, `groupIds?`, `hostType?`, `options?`): `Promise`\<`AxiosResponse`\<[`AffectedSystemsIdsOut`](../interfaces/AffectedSystemsIdsOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6271](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6271)

This is a report of identification numbers of affected systems for a given CVE. Use this request to obtain server identification numbers of all affected systems.

#### Parameters

##### cveId

`string`

CVE id.

##### filter?

`string`

Full text filter for the display name of system.

##### limit?

`number`

Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination.

##### offset?

`number`

Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### page?

`number`

Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### pageSize?

`number`

Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### sort?

`string`

Sorting used for response.

##### statusId?

`string`

Filer based on CVE status ID.

##### dataFormat?

`string`

Format of the output data, either JSON (default) or CSV.

##### uuid?

`string`

Filter based on UUID of inventory.

##### ruleKey?

`string`[]

Filters security rules by its error key.

##### rulePresence?

`boolean`[]

Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all.

##### rule?

`string`[]

Filters CVEs or systems by security rule, has two functionalities. If value is false, shows results without security rules, every other value is taken as rule error key.

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### sapSids?

`string`[]

List of SAP IDs to filter with

##### sapSystem?

`boolean`

Boolean value which shows systems managed by SAP.

##### showAdvisories?

`boolean`

If true shows advisories list

##### advisory?

`string`

Filter by advisory name, works only with show_advisories&#x3D;true

##### rhelVersion?

`string`

Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS.

##### firstReportedFrom?

`string`

Filter for CVEs/Systems where the vulnerability appeared after given date.

##### firstReportedTo?

`string`

Filter for CVEs/Systems where the vulnerability appeared before given date.

##### advisoryAvailable?

`boolean`[]

String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory.

##### remediation?

`string`

Filer based on available remediation type id.

##### ansible?

`boolean`

Boolean value which shows systems managed by Ansible Automation Platform.

##### mssql?

`boolean`

Boolean value which shows systems managed by MSSQL.

##### groupNames?

`string`[]

Names of the inventory groups.

##### groupIds?

`string`[]

IDs of the inventory groups.

##### hostType?

(`"rpmdnf"` \| `"image"` \| `"edge"`)[]

For filtering out the systems based on their type. Value \&quot;rpmdnf\&quot; for RPMDNF systems, \&quot;image\&quot; for image-mode systems.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AffectedSystemsIdsOut`](../interfaces/AffectedSystemsIdsOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getAnnouncement()

> **getAnnouncement**(`options?`): `Promise`\<`AxiosResponse`\<[`AnnouncementOut`](../interfaces/AnnouncementOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6282](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6282)

This endpoint provides vulnerability service announcements. Remain informed about important alerts for the vulnerability service. Announcements are issued by Insights Product Managers and other subject matter experts.

#### Parameters

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AnnouncementOut`](../interfaces/AnnouncementOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getApiStatus()

> **getApiStatus**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, \{ \}\>\>

Defined in: [api.ts:6293](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6293)

Checks database availability and API response threshold time.

#### Parameters

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getBusinessRiskList()

> **getBusinessRiskList**(`options?`): `Promise`\<`AxiosResponse`\<[`BusinessRiskListOut`](../interfaces/BusinessRiskListOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6304](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6304)

This endpoint helps you determine the numeric business risk for a given CVE. A business risk is a label you can set for a given CVE. Choose one of five business risk options ranging from 0-4, where 0 is not defined and 4 indicates a critical risk. You must call this endpoint to choose a numerical value before calling the *PATCH/cves/business_risk* endpoint.

#### Parameters

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BusinessRiskListOut`](../interfaces/BusinessRiskListOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getCveDetails()

> **getCveDetails**(`cveId`, `advisoryAvailable?`, `options?`): `Promise`\<`AxiosResponse`\<[`CveDetailOut`](../interfaces/CveDetailOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6317](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6317)

This endpoint returns the CVE identification number, description, scores and other metadata. The metadata includes the description, CVSS 2/3 Score, CVSS 2/3 attack vector, severity, public date, modified date, business risk, status, a URL to Red Hat web pages, a list of advisories remediating the CVE, and information regarding known exploits for the CVE.

#### Parameters

##### cveId

`string`

CVE id.

##### advisoryAvailable?

`boolean`[]

String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CveDetailOut`](../interfaces/CveDetailOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getCveIdsBySystem()

> **getCveIdsBySystem**(`inventoryId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `statusId?`, `dataFormat?`, `businessRiskId?`, `rulePresence?`, `showAdvisories?`, `advisory?`, `ruleKey?`, `knownExploit?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `tags?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemCvesIdsOut`](../interfaces/SystemCvesIdsOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6353](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6353)

This endpoint displays identification numbers of all CVEs for which a system is exposed. Use this endpoint to learn which CVEs are affecting a given system.

#### Parameters

##### inventoryId

`string`

Inventory ID.

##### filter?

`string`

Full text filter for CVE and it\&#39;s description text.

##### limit?

`number`

Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination.

##### offset?

`number`

Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### page?

`number`

Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### pageSize?

`number`

Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### sort?

`string`

Sorting used for response.

##### cvssFrom?

`number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

##### cvssTo?

`number`

Filter based on cvss score, up to the value.

##### publicFrom?

`string`

Filter CVEs based on their published date, starting from the date.

##### publicTo?

`string`

Filter CVEs based on their published date, up to the date.

##### impact?

`string`

Filter based on impact IDs.

##### statusId?

`string`

Filer based on CVE status ID.

##### dataFormat?

`string`

Format of the output data, either JSON (default) or CSV.

##### businessRiskId?

`string`

Filter based on business risk IDs.

##### rulePresence?

`boolean`[]

Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all.

##### showAdvisories?

`boolean`

If true shows advisories list

##### advisory?

`string`

Filter by advisory name, works only with show_advisories&#x3D;true

##### ruleKey?

`string`[]

Filters security rules by its error key.

##### knownExploit?

`boolean`[]

String of booleans (array of booleans), where true shows CVEs with known exploits, false shows CVEs without known exploits.

##### firstReportedFrom?

`string`

Filter for CVEs/Systems where the vulnerability appeared after given date.

##### firstReportedTo?

`string`

Filter for CVEs/Systems where the vulnerability appeared before given date.

##### advisoryAvailable?

`boolean`[]

String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory.

##### remediation?

`string`

Filer based on available remediation type id.

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemCvesIdsOut`](../interfaces/SystemCvesIdsOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getCveIdsList()

> **getCveIdsList**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `dataFormat?`, `businessRiskId?`, `statusId?`, `rulePresence?`, `tags?`, `sapSids?`, `sapSystem?`, `knownExploit?`, `affecting?`, `rhelVersion?`, `ansible?`, `mssql?`, `advisoryAvailable?`, `options?`): `Promise`\<`AxiosResponse`\<[`VulnerabilitiesIdsOut`](../interfaces/VulnerabilitiesIdsOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6388](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6388)

This is an overview of vulnerabilities identification numbers across your entire system inventory. Use this endpoint to get an overview of which CVEs are affecting your account.

#### Parameters

##### filter?

`string`

Full text filter for CVE and it\&#39;s description text.

##### limit?

`number`

Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination.

##### offset?

`number`

Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### page?

`number`

Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### pageSize?

`number`

Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### sort?

`string`

Sorting used for response.

##### cvssFrom?

`number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

##### cvssTo?

`number`

Filter based on cvss score, up to the value.

##### publicFrom?

`string`

Filter CVEs based on their published date, starting from the date.

##### publicTo?

`string`

Filter CVEs based on their published date, up to the date.

##### impact?

`string`

Filter based on impact IDs.

##### dataFormat?

`string`

Format of the output data, either JSON (default) or CSV.

##### businessRiskId?

`string`

Filter based on business risk IDs.

##### statusId?

`string`

Filer based on CVE status ID.

##### rulePresence?

`boolean`[]

Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all.

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### sapSids?

`string`[]

List of SAP IDs to filter with

##### sapSystem?

`boolean`

Boolean value which shows systems managed by SAP.

##### knownExploit?

`boolean`[]

String of booleans (array of booleans), where true shows CVEs with known exploits, false shows CVEs without known exploits.

##### affecting?

`boolean`[]

Comma seprated string with bools (array of bools). True value controls displaying CVEs with at least one system affected. False value toggles CVEs with no systems affected. Defaults to showing only CVEs with at least one system affected.

##### rhelVersion?

`string`

Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS.

##### ansible?

`boolean`

Boolean value which shows systems managed by Ansible Automation Platform.

##### mssql?

`boolean`

Boolean value which shows systems managed by MSSQL.

##### advisoryAvailable?

`boolean`[]

String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`VulnerabilitiesIdsOut`](../interfaces/VulnerabilitiesIdsOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getCveList()

> **getCveList**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `dataFormat?`, `businessRiskId?`, `statusId?`, `rulePresence?`, `tags?`, `sapSids?`, `sapSystem?`, `knownExploit?`, `affecting?`, `rhelVersion?`, `report?`, `advancedReport?`, `ansible?`, `mssql?`, `advisoryAvailable?`, `groupNames?`, `groupIds?`, `affectingHostType?`, `options?`): `Promise`\<`AxiosResponse`\<[`VulnerabilitiesOut`](../interfaces/VulnerabilitiesOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6428](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6428)

This provides an overview of vulnerabilities across your entire system inventory. Use this endpoint to get an overview of which CVEs are affecting your account, including some CVE metadata, how many systems are affected by each CVE, and more.

#### Parameters

##### filter?

`string`

Full text filter for CVE and it\&#39;s description text.

##### limit?

`number`

Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination.

##### offset?

`number`

Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### page?

`number`

Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### pageSize?

`number`

Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### sort?

`string`

Sorting used for response.

##### cvssFrom?

`number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

##### cvssTo?

`number`

Filter based on cvss score, up to the value.

##### publicFrom?

`string`

Filter CVEs based on their published date, starting from the date.

##### publicTo?

`string`

Filter CVEs based on their published date, up to the date.

##### impact?

`string`

Filter based on impact IDs.

##### dataFormat?

`string`

Format of the output data, either JSON (default) or CSV.

##### businessRiskId?

`string`

Filter based on business risk IDs.

##### statusId?

`string`

Filer based on CVE status ID.

##### rulePresence?

`boolean`[]

Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all.

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### sapSids?

`string`[]

List of SAP IDs to filter with

##### sapSystem?

`boolean`

Boolean value which shows systems managed by SAP.

##### knownExploit?

`boolean`[]

String of booleans (array of booleans), where true shows CVEs with known exploits, false shows CVEs without known exploits.

##### affecting?

`boolean`[]

Comma seprated string with bools (array of bools). True value controls displaying CVEs with at least one system affected. False value toggles CVEs with no systems affected. Defaults to showing only CVEs with at least one system affected.

##### rhelVersion?

`string`

Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS.

##### report?

`boolean`

Needs to be used when endpoint data is used for report generation, checks RBAC permission for report and export feature.

##### advancedReport?

`boolean`

Needs to be used when endpoint data is used for Report by CVEs feature, checks RBAC permission for advanced report.

##### ansible?

`boolean`

Boolean value which shows systems managed by Ansible Automation Platform.

##### mssql?

`boolean`

Boolean value which shows systems managed by MSSQL.

##### advisoryAvailable?

`boolean`[]

String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory.

##### groupNames?

`string`[]

Names of the inventory groups.

##### groupIds?

`string`[]

IDs of the inventory groups.

##### affectingHostType?

(`"rpmdnf"` \| `"image"` \| `"edge"` \| `"none"`)[]

Controls, whenever CVE has 1 or more affecting systems. Value \&quot;image\&quot; returns CVEs with one or more vulnerable image-mode systems, value \&quot;rpmdnf\&quot; returns CVEs with one or more vulnerable conventional systems. Value \&quot;none\&quot; returns CVEs not affecting systems of any kind.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`VulnerabilitiesOut`](../interfaces/VulnerabilitiesOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getCveList\_1()

> **getCveList\_1**(`vulnerabilitiesPostIn`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `options?`): `Promise`\<`AxiosResponse`\<[`VulnerabilitiesPostOut`](../interfaces/VulnerabilitiesPostOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6483](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6483)

This is an overview of vulnerabilities for specific CVEs provided in the body. Use this endpoint to get a CVSS score, and learn the severity for a list of CVEs provided in the request.

#### Parameters

##### vulnerabilitiesPostIn

[`VulnerabilitiesPostIn`](../interfaces/VulnerabilitiesPostIn.md)

List of CVEs to provide info about.

##### filter?

`string`

Full text filter for CVE and it\&#39;s description text.

##### limit?

`number`

Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination.

##### offset?

`number`

Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### page?

`number`

Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### pageSize?

`number`

Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### sort?

`string`

Sorting used for response.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`VulnerabilitiesPostOut`](../interfaces/VulnerabilitiesPostOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getCveListBySystem()

> **getCveListBySystem**(`inventoryId`, `filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `cvssFrom?`, `cvssTo?`, `publicFrom?`, `publicTo?`, `impact?`, `statusId?`, `dataFormat?`, `businessRiskId?`, `rulePresence?`, `showAdvisories?`, `advisory?`, `ruleKey?`, `knownExploit?`, `firstReportedFrom?`, `firstReportedTo?`, `advisoryAvailable?`, `remediation?`, `report?`, `tags?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemCvesOut`](../interfaces/SystemCvesOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6465](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6465)

This endpoint displays detailed information about all CVEs for which a system is exposed. Use this endpoint to discover which CVEs are affecting a given system. CVE metadata is included.

#### Parameters

##### inventoryId

`string`

Inventory ID.

##### filter?

`string`

Full text filter for CVE and it\&#39;s description text.

##### limit?

`number`

Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination.

##### offset?

`number`

Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### page?

`number`

Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### pageSize?

`number`

Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### sort?

`string`

Sorting used for response.

##### cvssFrom?

`number`

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

##### cvssTo?

`number`

Filter based on cvss score, up to the value.

##### publicFrom?

`string`

Filter CVEs based on their published date, starting from the date.

##### publicTo?

`string`

Filter CVEs based on their published date, up to the date.

##### impact?

`string`

Filter based on impact IDs.

##### statusId?

`string`

Filer based on CVE status ID.

##### dataFormat?

`string`

Format of the output data, either JSON (default) or CSV.

##### businessRiskId?

`string`

Filter based on business risk IDs.

##### rulePresence?

`boolean`[]

Comma seprated string with bools. If true shows only CVEs with security rule associated, if false shows CVEs without rules. true, false shows all.

##### showAdvisories?

`boolean`

If true shows advisories list

##### advisory?

`string`

Filter by advisory name, works only with show_advisories&#x3D;true

##### ruleKey?

`string`[]

Filters security rules by its error key.

##### knownExploit?

`boolean`[]

String of booleans (array of booleans), where true shows CVEs with known exploits, false shows CVEs without known exploits.

##### firstReportedFrom?

`string`

Filter for CVEs/Systems where the vulnerability appeared after given date.

##### firstReportedTo?

`string`

Filter for CVEs/Systems where the vulnerability appeared before given date.

##### advisoryAvailable?

`boolean`[]

String of booleans (array of booleans), where true shows CVE-system pairs with available advisory, false shows CVE-system pairs without available advisory.

##### remediation?

`string`

Filer based on available remediation type id.

##### report?

`boolean`

Needs to be used when endpoint data is used for report generation, checks RBAC permission for report and export feature.

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemCvesOut`](../interfaces/SystemCvesOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getDashbar()

> **getDashbar**(`tags?`, `sapSids?`, `sapSystem?`, `ansible?`, `mssql?`, `options?`): `Promise`\<`AxiosResponse`\<[`DashbarOut`](../interfaces/DashbarOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6499](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6499)

These are aggregations summarizing your account such as number of unique CVEs, list of security rules, CVEs by severity and more. Use this endpoint to obtain a snapshot of all the CVES and details about their prevalence, severity and other details.

#### Parameters

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### sapSids?

`string`[]

List of SAP IDs to filter with

##### sapSystem?

`boolean`

Boolean value which shows systems managed by SAP.

##### ansible?

`boolean`

Boolean value which shows systems managed by Ansible Automation Platform.

##### mssql?

`boolean`

Boolean value which shows systems managed by MSSQL.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DashbarOut`](../interfaces/DashbarOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getDashboard()

> **getDashboard**(`tags?`, `sapSids?`, `sapSystem?`, `ansible?`, `mssql?`, `options?`): `Promise`\<`AxiosResponse`\<[`Dashboard`](../interfaces/Dashboard.md), `any`, \{ \}\>\>

Defined in: [api.ts:6515](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6515)

These are aggregations summarizing your account such as number of unique CVEs, list of security rules, CVEs by severity, and more. Use this endpoint to obtain a snapshot of all the CVES and details about their prevalence and severity.

#### Parameters

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### sapSids?

`string`[]

List of SAP IDs to filter with

##### sapSystem?

`boolean`

Boolean value which shows systems managed by SAP.

##### ansible?

`boolean`

Boolean value which shows systems managed by Ansible Automation Platform.

##### mssql?

`boolean`

Boolean value which shows systems managed by MSSQL.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`Dashboard`](../interfaces/Dashboard.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getExecutiveReport()

> **getExecutiveReport**(`options?`): `Promise`\<`AxiosResponse`\<[`ExecutiveReport`](../interfaces/ExecutiveReport.md), `any`, \{ \}\>\>

Defined in: [api.ts:6526](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6526)

This returns an overview of vulnerabilities affecting a given account. Use this request when you need to download a high-level, executive report summarizing the security exposure of your infrastructure. These reports are designed for an executive audience and include data such as the number of RHEL systems analyzed, the number of security rules in your infrastructure, percentage of CVEs with a certain severity and more.

#### Parameters

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ExecutiveReport`](../interfaces/ExecutiveReport.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getOSExposure()

> **getOSExposure**(`dataFormat?`, `options?`): `Promise`\<`AxiosResponse`\<[`OSExposureReport`](../interfaces/OSExposureReport.md), `any`, \{ \}\>\>

Defined in: [api.ts:6538](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6538)

List RHEL versions and number of CVEs exposing each of these versions. Each RHEL version represents system with base and core group packages installed.

#### Parameters

##### dataFormat?

`string`

Format of the output data, either JSON (default) or CSV.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OSExposureReport`](../interfaces/OSExposureReport.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getPlaybookTemplate()

> **getPlaybookTemplate**(`ruleId`, `options?`): `Promise`\<`AxiosResponse`\<[`PlaybookTemplate`](../interfaces/PlaybookTemplate.md), `any`, \{ \}\>\>

Defined in: [api.ts:6550](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6550)

This returns an Ansible playbook template for a given rule identification number. Use this endpoint to return an Ansible playbook template for a given rule error key. The template is used to remediate issues on your system.

#### Parameters

##### ruleId

`string`

Insights security rule ID.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PlaybookTemplate`](../interfaces/PlaybookTemplate.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getStatusList()

> **getStatusList**(`options?`): `Promise`\<`AxiosResponse`\<[`StatusListOut`](../interfaces/StatusListOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6561](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6561)

This endpoint returns a list of possible values for setting status for a CVE or system-CVE pair. Call this api when you want to know which values are available for setting a status. A list of numbers will be returned. You must call this endpoint before calling the *PATCH/cves/status* endpoint.

#### Parameters

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`StatusListOut`](../interfaces/StatusListOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getSystemDetails()

> **getSystemDetails**(`inventoryId`, `tags?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemDetailsOut`](../interfaces/SystemDetailsOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6574](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6574)

This allows you to get information about systems related to an inventory identification number. This includes details such as operating system, inventory tags, last update, opt-out status, and more.

#### Parameters

##### inventoryId

`string`

Inventory ID.

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemDetailsOut`](../interfaces/SystemDetailsOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getSystemsIds()

> **getSystemsIds**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `dataFormat?`, `stale?`, `uuid?`, `tags?`, `sapSids?`, `sapSystem?`, `excluded?`, `rhelVersion?`, `ansible?`, `mssql?`, `groupNames?`, `groupIds?`, `hostType?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemIdsOut`](../interfaces/SystemIdsOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6604](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6604)

This lists systems including those that have opted out of the current query. Use this when you do not want to see a registered system or systems in your reports.

#### Parameters

##### filter?

`string`

Full text filter for the display name of system.

##### limit?

`number`

Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination.

##### offset?

`number`

Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### page?

`number`

Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### pageSize?

`number`

Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### sort?

`string`

Sorting used for response.

##### dataFormat?

`string`

Format of the output data, either JSON (default) or CSV.

##### stale?

`boolean`

If set to true, shows stale systems. If not set defaults to false.

##### uuid?

`string`

Filter based on UUID of inventory.

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### sapSids?

`string`[]

List of SAP IDs to filter with

##### sapSystem?

`boolean`

Boolean value which shows systems managed by SAP.

##### excluded?

`boolean`[]

Comma seprated string with bools (array of bools). True boolean value displays systems which are excluded. False value displays systems excluded from vulnerability analysis. Defaults to showing only those systems which are not excluded.

##### rhelVersion?

`string`

Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS.

##### ansible?

`boolean`

Boolean value which shows systems managed by Ansible Automation Platform.

##### mssql?

`boolean`

Boolean value which shows systems managed by MSSQL.

##### groupNames?

`string`[]

Names of the inventory groups.

##### groupIds?

`string`[]

IDs of the inventory groups.

##### hostType?

(`"rpmdnf"` \| `"image"` \| `"edge"`)[]

For filtering out the systems based on their type. Value \&quot;rpmdnf\&quot; for RPMDNF systems, \&quot;image\&quot; for image-mode systems.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemIdsOut`](../interfaces/SystemIdsOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getSystemsList()

> **getSystemsList**(`filter?`, `limit?`, `offset?`, `page?`, `pageSize?`, `sort?`, `dataFormat?`, `stale?`, `uuid?`, `tags?`, `sapSids?`, `sapSystem?`, `excluded?`, `rhelVersion?`, `report?`, `ansible?`, `mssql?`, `groupNames?`, `groupIds?`, `hostType?`, `options?`): `Promise`\<`AxiosResponse`\<[`SystemListOut`](../interfaces/SystemListOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6635](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6635)

List systems that are accessible when you are logged into your account. Use this endpoint to view basic system attributes such as display name and system type.

#### Parameters

##### filter?

`string`

Full text filter for the display name of system.

##### limit?

`number`

Maximum number of records per page. Limit/Offset pagination wins over page/page_size pagination.

##### offset?

`number`

Offset of first record of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### page?

`number`

Page number of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### pageSize?

`number`

Page size of paginated response. Limit/Offset pagination wins over page/page_size pagination.

##### sort?

`string`

Sorting used for response.

##### dataFormat?

`string`

Format of the output data, either JSON (default) or CSV.

##### stale?

`boolean`

If set to true, shows stale systems. If not set defaults to false.

##### uuid?

`string`

Filter based on UUID of inventory.

##### tags?

`string`[]

Filter based on hosts tags. Tags needs to be in query format, that means &lt;namespace&gt;/&lt;key&gt;&#x3D;&lt;value&gt; or &lt;namespace&gt;/&lt;key&gt; if value is null. Characters \&#39;/\&#39;, \&#39;&#x3D;\&#39; in tag values needs to be escaped by url encoding.

##### sapSids?

`string`[]

List of SAP IDs to filter with

##### sapSystem?

`boolean`

Boolean value which shows systems managed by SAP.

##### excluded?

`boolean`[]

Comma seprated string with bools (array of bools). True boolean value displays systems which are excluded. False value displays systems excluded from vulnerability analysis. Defaults to showing only those systems which are not excluded.

##### rhelVersion?

`string`

Filters results by RHEL OS version. Automatically flters out systems which are not RHEL or have uknown OS.

##### report?

`boolean`

Needs to be used when endpoint data is used for report generation, checks RBAC permission for report and export feature.

##### ansible?

`boolean`

Boolean value which shows systems managed by Ansible Automation Platform.

##### mssql?

`boolean`

Boolean value which shows systems managed by MSSQL.

##### groupNames?

`string`[]

Names of the inventory groups.

##### groupIds?

`string`[]

IDs of the inventory groups.

##### hostType?

(`"rpmdnf"` \| `"image"` \| `"edge"`)[]

For filtering out the systems based on their type. Value \&quot;rpmdnf\&quot; for RPMDNF systems, \&quot;image\&quot; for image-mode systems.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SystemListOut`](../interfaces/SystemListOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### getVersion()

> **getVersion**(`options?`): `Promise`\<`AxiosResponse`\<[`VersionOut`](../interfaces/VersionOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6646](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6646)

This endpoint will provide you with the application version. Use this endpoint to track application changes.

#### Parameters

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`VersionOut`](../interfaces/VersionOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### setCveBusinessRisk()

> **setCveBusinessRisk**(`cveRiskIn`, `options?`): `Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6658](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6658)

This sets a business risk for a specific CVE. Set a value of low, medium, high or critical for a given CVE. These values are obtained by the business risk path *GET/business_risk*. To set a business risk, you must call the GET/business_risk endpoint first, followed by the *PATCH/cves/business_risk* path.

#### Parameters

##### cveRiskIn

[`CveRiskIn`](../interfaces/CveRiskIn.md)

Values to be set. At least one of the \&quot;business_risk_id\&quot; or \&quot;business_risk_text\&quot; parameters is required.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### setCveStatus()

> **setCveStatus**(`cveStatusIn`, `options?`): `Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6670](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6670)

This sets the status for a specific CVE. Set a status value for a given CVE (e.g. in-review, on-hold, scheduled for a patch, or resolved). These values are obtained by sending a *GET/status* request. To set a status, you must call the *GET/business_risk* first, followed by the *PATCH/cves/status* path.

#### Parameters

##### cveStatusIn

[`CveStatusIn`](../interfaces/CveStatusIn.md)

Values to be set. At least one of the \&quot;status_id\&quot; or \&quot;status_text\&quot; parameters is required.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### setCvesWithoutErrata()

> **setCvesWithoutErrata**(`cvesWithoutErrataIn`, `options?`): `Promise`\<`AxiosResponse`\<[`CvesWithoutErrataOut`](../interfaces/CvesWithoutErrataOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6682](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6682)

Use this endpoint to enable/disable reporting CVEs that do not have advisories (errata) for your customer account. If the feature is disabled, CVEs without advisories will be hidden in outputs of all endpoints.

#### Parameters

##### cvesWithoutErrataIn

[`CvesWithoutErrataIn`](../interfaces/CvesWithoutErrataIn.md)

Values to be set.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CvesWithoutErrataOut`](../interfaces/CvesWithoutErrataOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### setStatus()

> **setStatus**(`statusIn`, `options?`): `Promise`\<`AxiosResponse`\<[`StatusOut`](../interfaces/StatusOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6694](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6694)

This endpoint sets status for given systems and CVEs. Use this endpoint when you need to set a status value for system-CVE pairs.

#### Parameters

##### statusIn

[`StatusIn`](../interfaces/StatusIn.md)

Values to be set.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`StatusOut`](../interfaces/StatusOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi

***

### setSystemsOptOut()

> **setSystemsOptOut**(`optOutIn`, `options?`): `Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`, \{ \}\>\>

Defined in: [api.ts:6706](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L6706)

Opt a specific system in or out of vulnerability analysis. Use this when you want to use other Insights services but do not want to see specific systems in vulnerability reports. This allows you to hide select systems.

#### Parameters

##### optOutIn

[`OptOutIn`](../interfaces/OptOutIn.md)

Values to be set.

##### options?

`any`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BulkChangeOut`](../interfaces/BulkChangeOut.md), `any`, \{ \}\>\>

#### Throws

#### Memberof

DefaultApi
