[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / MetaAffectedSystems

# Interface: MetaAffectedSystems

Defined in: [api.ts:1247](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1247)

## Export

MetaAffectedSystems

## Properties

### cves\_without\_errata

> **cves\_without\_errata**: `boolean` \| `null`

Defined in: [api.ts:1355](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1355)

CVEs without Errata feature flag

#### Memberof

MetaAffectedSystems

***

### data\_format

> **data\_format**: `string`

Defined in: [api.ts:1301](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1301)

Format of the output data, either JSON (default) or CSV.

#### Memberof

MetaAffectedSystems

***

### filter

> **filter**: `string` \| `null`

Defined in: [api.ts:1253](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1253)

Full text filter

#### Memberof

MetaAffectedSystems

***

### first\_reported\_from

> **first\_reported\_from**: `string` \| `null`

Defined in: [api.ts:1343](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1343)

Filter system-cve pairs based on first time of detection of CVE.

#### Memberof

MetaAffectedSystems

***

### first\_reported\_to

> **first\_reported\_to**: `string` \| `null`

Defined in: [api.ts:1349](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1349)

Filter system-cve pairs based on first time of detection of CVE.

#### Memberof

MetaAffectedSystems

***

### group\_ids

> **group\_ids**: `string` \| `null`

Defined in: [api.ts:1367](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1367)

ID of the inventory group.

#### Memberof

MetaAffectedSystems

***

### group\_names

> **group\_names**: `string` \| `null`

Defined in: [api.ts:1361](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1361)

Name of the inventory group.

#### Memberof

MetaAffectedSystems

***

### limit

> **limit**: `number`

Defined in: [api.ts:1259](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1259)

Maximum number of paginated results.

#### Memberof

MetaAffectedSystems

***

### offset

> **offset**: `number`

Defined in: [api.ts:1265](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1265)

First record of paginated response.

#### Memberof

MetaAffectedSystems

***

### page

> **page**: `number`

Defined in: [api.ts:1271](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1271)

Page number of paginated response.

#### Memberof

MetaAffectedSystems

***

### page\_size

> **page\_size**: `number`

Defined in: [api.ts:1277](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1277)

Number of records per page of paginated response.

#### Memberof

MetaAffectedSystems

***

### pages

> **pages**: `number`

Defined in: [api.ts:1283](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1283)

Total number of pages of paginated response.

#### Memberof

MetaAffectedSystems

***

### patch\_access

> **patch\_access**: `boolean` \| `null`

Defined in: [api.ts:1331](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1331)

If show_advisories=true shows access to patch service else null

#### Memberof

MetaAffectedSystems

***

### permissions

> **permissions**: `string`[]

Defined in: [api.ts:1307](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1307)

Fetched permissions from RBAC for given user

#### Memberof

MetaAffectedSystems

***

### rhel\_version

> **rhel\_version**: `string` \| `null`

Defined in: [api.ts:1337](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1337)

Filter base on system RHEL version.

#### Memberof

MetaAffectedSystems

***

### rule\_key

> **rule\_key**: `string` \| `null`

Defined in: [api.ts:1319](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1319)

Filters security rules by its error key.

#### Memberof

MetaAffectedSystems

***

### rule\_presence

> **rule\_presence**: `string` \| `null`

Defined in: [api.ts:1325](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1325)

Filter based on presence of security rule

#### Memberof

MetaAffectedSystems

***

### sort

> **sort**: `string` \| `null`

Defined in: [api.ts:1289](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1289)

Sorting filter.

#### Memberof

MetaAffectedSystems

***

### status\_id

> **status\_id**: `string` \| `null`

Defined in: [api.ts:1313](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1313)

Filer based on CVE status ID.

#### Memberof

MetaAffectedSystems

***

### total\_items

> **total\_items**: `number`

Defined in: [api.ts:1295](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1295)

Total number of records.

#### Memberof

MetaAffectedSystems
