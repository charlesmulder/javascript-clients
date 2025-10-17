[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / MetaCvesAllOf

# Interface: MetaCvesAllOf

Defined in: [api.ts:1580](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1580)

## Export

MetaCvesAllOf

## Properties

### business\_risk\_id

> **business\_risk\_id**: `string` \| `null`

Defined in: [api.ts:1586](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1586)

Filter based on business risk IDs.

#### Memberof

MetaCvesAllOf

***

### cves\_without\_errata

> **cves\_without\_errata**: `boolean` \| `null`

Defined in: [api.ts:1652](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1652)

CVEs without Errata feature flag

#### Memberof

MetaCvesAllOf

***

### cvss\_from

> **cvss\_from**: `number` \| `null`

Defined in: [api.ts:1592](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1592)

Filter based on cvss score, starting from the value. Use -1 to include also CVEs with N/A cvss score.

#### Memberof

MetaCvesAllOf

***

### cvss\_to

> **cvss\_to**: `number` \| `null`

Defined in: [api.ts:1598](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1598)

Filter based on cvss score, up to the value.

#### Memberof

MetaCvesAllOf

***

### first\_reported\_from

> **first\_reported\_from**: `string` \| `null`

Defined in: [api.ts:1640](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1640)

Filter system-cve pairs based on first time of detection of CVE.

#### Memberof

MetaCvesAllOf

***

### first\_reported\_to

> **first\_reported\_to**: `string` \| `null`

Defined in: [api.ts:1646](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1646)

Filter system-cve pairs based on first time of detection of CVE.

#### Memberof

MetaCvesAllOf

***

### impact

> **impact**: `string` \| `null`

Defined in: [api.ts:1616](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1616)

Filter based on impact IDs.

#### Memberof

MetaCvesAllOf

***

### patch\_access

> **patch\_access**: `boolean` \| `null`

Defined in: [api.ts:1634](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1634)

If show_advisories=true shows access to patch service else null

#### Memberof

MetaCvesAllOf

***

### public\_from

> **public\_from**: `string` \| `null`

Defined in: [api.ts:1604](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1604)

Filter CVEs based on their published date, starting from the date.

#### Memberof

MetaCvesAllOf

***

### public\_to

> **public\_to**: `string` \| `null`

Defined in: [api.ts:1610](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1610)

Filter CVEs based on their published date, up to the date.

#### Memberof

MetaCvesAllOf

***

### rule\_presence

> **rule\_presence**: `string` \| `null`

Defined in: [api.ts:1628](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1628)

Filter based on presence of security rule

#### Memberof

MetaCvesAllOf

***

### status\_id

> **status\_id**: `string` \| `null`

Defined in: [api.ts:1622](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1622)

Filer based on CVE status ID.

#### Memberof

MetaCvesAllOf
