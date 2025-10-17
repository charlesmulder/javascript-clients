[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / MetaCves

# Interface: MetaCves

Defined in: [api.ts:1441](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1441)

## Export

MetaCves

## Properties

### business\_risk\_id

> **business\_risk\_id**: `string` \| `null`

Defined in: [api.ts:1507](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1507)

Filter based on business risk IDs.

#### Memberof

MetaCves

***

### cves\_without\_errata

> **cves\_without\_errata**: `boolean` \| `null`

Defined in: [api.ts:1573](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1573)

CVEs without Errata feature flag

#### Memberof

MetaCves

***

### cvss\_from

> **cvss\_from**: `number` \| `null`

Defined in: [api.ts:1513](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1513)

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

#### Memberof

MetaCves

***

### cvss\_to

> **cvss\_to**: `number` \| `null`

Defined in: [api.ts:1519](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1519)

Filter based on cvss score, up to the value.

#### Memberof

MetaCves

***

### data\_format

> **data\_format**: `string`

Defined in: [api.ts:1495](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1495)

Format of the output data, either JSON (default) or CSV.

#### Memberof

MetaCves

***

### filter

> **filter**: `string` \| `null`

Defined in: [api.ts:1447](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1447)

Full text filter

#### Memberof

MetaCves

***

### first\_reported\_from

> **first\_reported\_from**: `string` \| `null`

Defined in: [api.ts:1561](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1561)

Filter system-cve pairs based on first time of detection of CVE.

#### Memberof

MetaCves

***

### first\_reported\_to

> **first\_reported\_to**: `string` \| `null`

Defined in: [api.ts:1567](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1567)

Filter system-cve pairs based on first time of detection of CVE.

#### Memberof

MetaCves

***

### impact

> **impact**: `string` \| `null`

Defined in: [api.ts:1537](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1537)

Filter based on impact IDs.

#### Memberof

MetaCves

***

### limit

> **limit**: `number`

Defined in: [api.ts:1453](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1453)

Maximum number of paginated results.

#### Memberof

MetaCves

***

### offset

> **offset**: `number`

Defined in: [api.ts:1459](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1459)

First record of paginated response.

#### Memberof

MetaCves

***

### page

> **page**: `number`

Defined in: [api.ts:1465](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1465)

Page number of paginated response.

#### Memberof

MetaCves

***

### page\_size

> **page\_size**: `number`

Defined in: [api.ts:1471](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1471)

Number of records per page of paginated response.

#### Memberof

MetaCves

***

### pages

> **pages**: `number`

Defined in: [api.ts:1477](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1477)

Total number of pages of paginated response.

#### Memberof

MetaCves

***

### patch\_access

> **patch\_access**: `boolean` \| `null`

Defined in: [api.ts:1555](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1555)

If show_advisories=true shows access to patch service else null

#### Memberof

MetaCves

***

### permissions

> **permissions**: `string`[]

Defined in: [api.ts:1501](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1501)

Fetched permissions from RBAC for given user

#### Memberof

MetaCves

***

### public\_from

> **public\_from**: `string` \| `null`

Defined in: [api.ts:1525](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1525)

Filter CVEs based on their published date, starting from the date.

#### Memberof

MetaCves

***

### public\_to

> **public\_to**: `string` \| `null`

Defined in: [api.ts:1531](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1531)

Filter CVEs based on their published date, up to the date.

#### Memberof

MetaCves

***

### rule\_presence

> **rule\_presence**: `string` \| `null`

Defined in: [api.ts:1549](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1549)

Filter based on presence of security rule

#### Memberof

MetaCves

***

### sort

> **sort**: `string` \| `null`

Defined in: [api.ts:1483](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1483)

Sorting filter.

#### Memberof

MetaCves

***

### status\_id

> **status\_id**: `string` \| `null`

Defined in: [api.ts:1543](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1543)

Filer based on CVE status ID.

#### Memberof

MetaCves

***

### total\_items

> **total\_items**: `number`

Defined in: [api.ts:1489](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1489)

Total number of records.

#### Memberof

MetaCves
