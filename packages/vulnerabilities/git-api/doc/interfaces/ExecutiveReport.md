[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / ExecutiveReport

# Interface: ExecutiveReport

Defined in: [api.ts:754](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L754)

## Export

ExecutiveReport

## Properties

### cves\_by\_severity

> **cves\_by\_severity**: [`ExecutiveReportCvesBySeverity`](ExecutiveReportCvesBySeverity.md)

Defined in: [api.ts:778](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L778)

#### Memberof

ExecutiveReport

***

### cves\_total

> **cves\_total**: `number`

Defined in: [api.ts:772](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L772)

Number of unique CVEs discovered on the managed systems.

#### Memberof

ExecutiveReport

***

### meta?

> `optional` **meta**: [`MetaPermissions`](MetaPermissions.md)

Defined in: [api.ts:814](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L814)

#### Memberof

ExecutiveReport

***

### recent\_cves

> **recent\_cves**: [`ExecutiveReportRecentCves`](ExecutiveReportRecentCves.md)

Defined in: [api.ts:784](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L784)

#### Memberof

ExecutiveReport

***

### rules\_by\_severity

> **rules\_by\_severity**: [`ExecutiveReportRulesBySeverity`](ExecutiveReportRulesBySeverity.md)

Defined in: [api.ts:790](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L790)

#### Memberof

ExecutiveReport

***

### rules\_total

> **rules\_total**: `number`

Defined in: [api.ts:796](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L796)

Number of unique CVEs discovered on the managed systems.

#### Memberof

ExecutiveReport

***

### system\_count

> **system\_count**: `number`

Defined in: [api.ts:766](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L766)

Total number of systems managed by vulnerability application.

#### Memberof

ExecutiveReport

***

### system\_count\_per\_type?

> `optional` **system\_count\_per\_type**: [`MetaVulnerabilitiesOutAllOfSystemCountPerType`](MetaVulnerabilitiesOutAllOfSystemCountPerType.md)

Defined in: [api.ts:760](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L760)

#### Memberof

ExecutiveReport

***

### top\_cves?

> `optional` **top\_cves**: [`ExecutiveReportTopCves`](ExecutiveReportTopCves.md)[]

Defined in: [api.ts:802](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L802)

#### Memberof

ExecutiveReport

***

### top\_rules?

> `optional` **top\_rules**: [`ExecutiveReportTopRules`](ExecutiveReportTopRules.md)[]

Defined in: [api.ts:808](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L808)

#### Memberof

ExecutiveReport
