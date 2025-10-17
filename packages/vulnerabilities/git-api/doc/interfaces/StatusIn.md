[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / StatusIn

# Interface: StatusIn

Defined in: [api.ts:2290](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2290)

## Export

StatusIn

## Properties

### cve

> **cve**: [`CveOrList`](../type-aliases/CveOrList.md)

Defined in: [api.ts:2302](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2302)

#### Memberof

StatusIn

***

### inventory\_id?

> `optional` **inventory\_id**: [`InventoryIdOrList`](../type-aliases/InventoryIdOrList.md)

Defined in: [api.ts:2296](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2296)

#### Memberof

StatusIn

***

### status\_id?

> `optional` **status\_id**: `number`

Defined in: [api.ts:2308](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2308)

Status ID to be set, obtained by GET method. If not specified, global CVE status is set.

#### Memberof

StatusIn

***

### status\_text?

> `optional` **status\_text**: `string` \| `null`

Defined in: [api.ts:2314](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L2314)

Complementary text to the status.

#### Memberof

StatusIn
