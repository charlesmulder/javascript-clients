[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / MetaVulnerabilitiesOutAllOf

# Interface: MetaVulnerabilitiesOutAllOf

Defined in: [api.ts:2079](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2079)

## Export

MetaVulnerabilitiesOutAllOf

## Properties

### advisory\_available

> **advisory\_available**: `string` \| `null`

Defined in: [api.ts:2157](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2157)

Shows whether a CVE has available advisory or not

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### affecting

> **affecting**: `string` \| `null`

Defined in: [api.ts:2085](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2085)

Description of CVE showing preferences

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### business\_risk\_id

> **business\_risk\_id**: `string` \| `null`

Defined in: [api.ts:2091](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2091)

Filter based on business risk IDs.

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### cache\_used

> **cache\_used**: `boolean`

Defined in: [api.ts:2163](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2163)

Flag if cached data was used to produce the response.

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### cves\_without\_errata

> **cves\_without\_errata**: `boolean` \| `null`

Defined in: [api.ts:2151](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2151)

CVEs without Errata feature flag

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### cvss\_from

> **cvss\_from**: `number` \| `null`

Defined in: [api.ts:2097](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2097)

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### cvss\_to

> **cvss\_to**: `number` \| `null`

Defined in: [api.ts:2103](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2103)

Filter based on cvss score, up to the value.

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### impact

> **impact**: `string` \| `null`

Defined in: [api.ts:2121](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2121)

Filter based on impact IDs.

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### public\_from

> **public\_from**: `string` \| `null`

Defined in: [api.ts:2109](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2109)

Filter CVEs based on their published date, starting from the date.

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### public\_to

> **public\_to**: `string` \| `null`

Defined in: [api.ts:2115](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2115)

Filter CVEs based on their published date, up to the date.

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### rhel\_version

> **rhel\_version**: `string` \| `null`

Defined in: [api.ts:2139](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2139)

Filter base on system RHEL version.

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### rule\_presence

> **rule\_presence**: `string` \| `null`

Defined in: [api.ts:2145](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2145)

Filter based on presence of security rule

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### system\_count?

> `optional` **system\_count**: `number`

Defined in: [api.ts:2133](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2133)

Total number of systems managed by vulnerability application.

#### Memberof

MetaVulnerabilitiesOutAllOf

***

### system\_count\_per\_type?

> `optional` **system\_count\_per\_type**: [`MetaVulnerabilitiesOutAllOfSystemCountPerType`](MetaVulnerabilitiesOutAllOfSystemCountPerType.md)

Defined in: [api.ts:2127](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2127)

#### Memberof

MetaVulnerabilitiesOutAllOf
