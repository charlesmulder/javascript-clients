[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / SystemDetailsOutData

# Interface: SystemDetailsOutData

Defined in: [api.ts:2479](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2479)

## Export

SystemDetailsOutData

## Properties

### host\_type

> **host\_type**: [`SystemDetailsOutDataHostTypeEnum`](../enumerations/SystemDetailsOutDataHostTypeEnum.md)

Defined in: [api.ts:2539](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2539)

Type of the host

#### Memberof

SystemDetailsOutData

***

### last\_evaluation

> **last\_evaluation**: `string` \| `null`

Defined in: [api.ts:2485](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2485)

Date of last evaluation.

#### Memberof

SystemDetailsOutData

***

### last\_upload

> **last\_upload**: `string` \| `null`

Defined in: [api.ts:2503](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2503)

Date of the latest upload of archive.

#### Memberof

SystemDetailsOutData

***

### opt\_out

> **opt\_out**: `boolean`

Defined in: [api.ts:2497](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2497)

System opt out status.

#### Memberof

SystemDetailsOutData

***

### os

> **os**: `string`

Defined in: [api.ts:2521](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2521)

Operating system.

#### Memberof

SystemDetailsOutData

***

### rhsm\_lock

> **rhsm\_lock**: `string` \| `null`

Defined in: [api.ts:2527](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2527)

System is locked to following RHSM version.

#### Memberof

SystemDetailsOutData

***

### rules\_evaluation

> **rules\_evaluation**: `string` \| `null`

Defined in: [api.ts:2491](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2491)

Date of last security rules evaluation.

#### Memberof

SystemDetailsOutData

***

### stale?

> `optional` **stale**: `boolean`

Defined in: [api.ts:2509](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2509)

System stale status.

#### Memberof

SystemDetailsOutData

***

### tags

> **tags**: [`SystemDetailsOutDataTags`](SystemDetailsOutDataTags.md)[]

Defined in: [api.ts:2533](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2533)

#### Memberof

SystemDetailsOutData

***

### updated?

> `optional` **updated**: `string` \| `null`

Defined in: [api.ts:2515](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2515)

Date of the lastest upload of archive taken from Inventory syndicated data.

#### Memberof

SystemDetailsOutData
