[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / MetaVulnerabilitiesOut

# Interface: MetaVulnerabilitiesOut

Defined in: [api.ts:1928](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1928)

## Export

MetaVulnerabilitiesOut

## Properties

### advisory\_available

> **advisory\_available**: `string` \| `null`

Defined in: [api.ts:2066](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2066)

Shows whether a CVE has available advisory or not

#### Memberof

MetaVulnerabilitiesOut

***

### affecting

> **affecting**: `string` \| `null`

Defined in: [api.ts:1994](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1994)

Description of CVE showing preferences

#### Memberof

MetaVulnerabilitiesOut

***

### business\_risk\_id

> **business\_risk\_id**: `string` \| `null`

Defined in: [api.ts:2000](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2000)

Filter based on business risk IDs.

#### Memberof

MetaVulnerabilitiesOut

***

### cache\_used

> **cache\_used**: `boolean`

Defined in: [api.ts:2072](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2072)

Flag if cached data was used to produce the response.

#### Memberof

MetaVulnerabilitiesOut

***

### cves\_without\_errata

> **cves\_without\_errata**: `boolean` \| `null`

Defined in: [api.ts:2060](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2060)

CVEs without Errata feature flag

#### Memberof

MetaVulnerabilitiesOut

***

### cvss\_from

> **cvss\_from**: `number` \| `null`

Defined in: [api.ts:2006](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2006)

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

#### Memberof

MetaVulnerabilitiesOut

***

### cvss\_to

> **cvss\_to**: `number` \| `null`

Defined in: [api.ts:2012](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2012)

Filter based on cvss score, up to the value.

#### Memberof

MetaVulnerabilitiesOut

***

### data\_format

> **data\_format**: `string`

Defined in: [api.ts:1982](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1982)

Format of the output data, either JSON (default) or CSV.

#### Memberof

MetaVulnerabilitiesOut

***

### filter

> **filter**: `string` \| `null`

Defined in: [api.ts:1934](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1934)

Full text filter

#### Memberof

MetaVulnerabilitiesOut

***

### impact

> **impact**: `string` \| `null`

Defined in: [api.ts:2030](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2030)

Filter based on impact IDs.

#### Memberof

MetaVulnerabilitiesOut

***

### limit

> **limit**: `number`

Defined in: [api.ts:1940](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1940)

Maximum number of paginated results.

#### Memberof

MetaVulnerabilitiesOut

***

### offset

> **offset**: `number`

Defined in: [api.ts:1946](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1946)

First record of paginated response.

#### Memberof

MetaVulnerabilitiesOut

***

### page

> **page**: `number`

Defined in: [api.ts:1952](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1952)

Page number of paginated response.

#### Memberof

MetaVulnerabilitiesOut

***

### page\_size

> **page\_size**: `number`

Defined in: [api.ts:1958](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1958)

Number of records per page of paginated response.

#### Memberof

MetaVulnerabilitiesOut

***

### pages

> **pages**: `number`

Defined in: [api.ts:1964](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1964)

Total number of pages of paginated response.

#### Memberof

MetaVulnerabilitiesOut

***

### permissions

> **permissions**: `string`[]

Defined in: [api.ts:1988](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1988)

Fetched permissions from RBAC for given user

#### Memberof

MetaVulnerabilitiesOut

***

### public\_from

> **public\_from**: `string` \| `null`

Defined in: [api.ts:2018](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2018)

Filter CVEs based on their published date, starting from the date.

#### Memberof

MetaVulnerabilitiesOut

***

### public\_to

> **public\_to**: `string` \| `null`

Defined in: [api.ts:2024](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2024)

Filter CVEs based on their published date, up to the date.

#### Memberof

MetaVulnerabilitiesOut

***

### rhel\_version

> **rhel\_version**: `string` \| `null`

Defined in: [api.ts:2048](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2048)

Filter base on system RHEL version.

#### Memberof

MetaVulnerabilitiesOut

***

### rule\_presence

> **rule\_presence**: `string` \| `null`

Defined in: [api.ts:2054](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2054)

Filter based on presence of security rule

#### Memberof

MetaVulnerabilitiesOut

***

### sort

> **sort**: `string` \| `null`

Defined in: [api.ts:1970](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1970)

Sorting filter.

#### Memberof

MetaVulnerabilitiesOut

***

### system\_count?

> `optional` **system\_count**: `number`

Defined in: [api.ts:2042](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2042)

Total number of systems managed by vulnerability application.

#### Memberof

MetaVulnerabilitiesOut

***

### system\_count\_per\_type?

> `optional` **system\_count\_per\_type**: [`MetaVulnerabilitiesOutAllOfSystemCountPerType`](MetaVulnerabilitiesOutAllOfSystemCountPerType.md)

Defined in: [api.ts:2036](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L2036)

#### Memberof

MetaVulnerabilitiesOut

***

### total\_items

> **total\_items**: `number`

Defined in: [api.ts:1976](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1976)

Total number of records.

#### Memberof

MetaVulnerabilitiesOut
