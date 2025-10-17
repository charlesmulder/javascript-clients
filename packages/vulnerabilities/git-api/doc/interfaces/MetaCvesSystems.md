[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / MetaCvesSystems

# Interface: MetaCvesSystems

Defined in: [api.ts:1659](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1659)

## Export

MetaCvesSystems

## Properties

### business\_risk\_id

> **business\_risk\_id**: `string` \| `null`

Defined in: [api.ts:1725](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1725)

Filter based on business risk IDs.

#### Memberof

MetaCvesSystems

***

### cves\_without\_errata

> **cves\_without\_errata**: `boolean` \| `null`

Defined in: [api.ts:1791](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1791)

CVEs without Errata feature flag

#### Memberof

MetaCvesSystems

***

### cvss\_from

> **cvss\_from**: `number` \| `null`

Defined in: [api.ts:1731](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1731)

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

#### Memberof

MetaCvesSystems

***

### cvss\_to

> **cvss\_to**: `number` \| `null`

Defined in: [api.ts:1737](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1737)

Filter based on cvss score, up to the value.

#### Memberof

MetaCvesSystems

***

### data\_format

> **data\_format**: `string`

Defined in: [api.ts:1713](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1713)

Format of the output data, either JSON (default) or CSV.

#### Memberof

MetaCvesSystems

***

### filter

> **filter**: `string` \| `null`

Defined in: [api.ts:1665](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1665)

Full text filter

#### Memberof

MetaCvesSystems

***

### first\_reported\_from

> **first\_reported\_from**: `string` \| `null`

Defined in: [api.ts:1779](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1779)

Filter system-cve pairs based on first time of detection of CVE.

#### Memberof

MetaCvesSystems

***

### first\_reported\_to

> **first\_reported\_to**: `string` \| `null`

Defined in: [api.ts:1785](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1785)

Filter system-cve pairs based on first time of detection of CVE.

#### Memberof

MetaCvesSystems

***

### impact

> **impact**: `string` \| `null`

Defined in: [api.ts:1755](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1755)

Filter based on impact IDs.

#### Memberof

MetaCvesSystems

***

### limit

> **limit**: `number`

Defined in: [api.ts:1671](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1671)

Maximum number of paginated results.

#### Memberof

MetaCvesSystems

***

### offset

> **offset**: `number`

Defined in: [api.ts:1677](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1677)

First record of paginated response.

#### Memberof

MetaCvesSystems

***

### opt\_out

> **opt\_out**: `boolean`

Defined in: [api.ts:1797](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1797)

If given system was opted out.

#### Memberof

MetaCvesSystems

***

### page

> **page**: `number`

Defined in: [api.ts:1683](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1683)

Page number of paginated response.

#### Memberof

MetaCvesSystems

***

### page\_size

> **page\_size**: `number`

Defined in: [api.ts:1689](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1689)

Number of records per page of paginated response.

#### Memberof

MetaCvesSystems

***

### pages

> **pages**: `number`

Defined in: [api.ts:1695](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1695)

Total number of pages of paginated response.

#### Memberof

MetaCvesSystems

***

### patch\_access

> **patch\_access**: `boolean` \| `null`

Defined in: [api.ts:1773](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1773)

If show_advisories=true shows access to patch service else null

#### Memberof

MetaCvesSystems

***

### permissions

> **permissions**: `string`[]

Defined in: [api.ts:1719](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1719)

Fetched permissions from RBAC for given user

#### Memberof

MetaCvesSystems

***

### public\_from

> **public\_from**: `string` \| `null`

Defined in: [api.ts:1743](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1743)

Filter CVEs based on their published date, starting from the date.

#### Memberof

MetaCvesSystems

***

### public\_to

> **public\_to**: `string` \| `null`

Defined in: [api.ts:1749](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1749)

Filter CVEs based on their published date, up to the date.

#### Memberof

MetaCvesSystems

***

### rule\_presence

> **rule\_presence**: `string` \| `null`

Defined in: [api.ts:1767](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1767)

Filter based on presence of security rule

#### Memberof

MetaCvesSystems

***

### sort

> **sort**: `string` \| `null`

Defined in: [api.ts:1701](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1701)

Sorting filter.

#### Memberof

MetaCvesSystems

***

### status\_id

> **status\_id**: `string` \| `null`

Defined in: [api.ts:1761](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1761)

Filer based on CVE status ID.

#### Memberof

MetaCvesSystems

***

### total\_items

> **total\_items**: `number`

Defined in: [api.ts:1707](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L1707)

Total number of records.

#### Memberof

MetaCvesSystems
