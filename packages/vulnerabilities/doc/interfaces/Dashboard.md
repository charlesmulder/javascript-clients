[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / Dashboard

# Interface: Dashboard

Defined in: [api.ts:518](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L518)

## Export

Dashboard

## Properties

### cves\_by\_severity

> **cves\_by\_severity**: [`DashboardCvesBySeverity`](DashboardCvesBySeverity.md)

Defined in: [api.ts:530](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L530)

#### Memberof

Dashboard

***

### cves\_total

> **cves\_total**: `number`

Defined in: [api.ts:524](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L524)

Number of unique CVEs discovered on the managed systems.

#### Memberof

Dashboard

***

### exploited\_cves\_count

> **exploited\_cves\_count**: `number`

Defined in: [api.ts:560](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L560)

unique number of CVEs having known exploit affecting at least one system

#### Memberof

Dashboard

***

### recent\_cves

> **recent\_cves**: [`ExecutiveReportRecentCves`](ExecutiveReportRecentCves.md)

Defined in: [api.ts:536](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L536)

#### Memberof

Dashboard

***

### recent\_rules

> **recent\_rules**: [`DashboardRecentRules`](DashboardRecentRules.md)[]

Defined in: [api.ts:542](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L542)

List of recently (14 days) released security rules.

#### Memberof

Dashboard

***

### rules\_cves\_total

> **rules\_cves\_total**: `number`

Defined in: [api.ts:548](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L548)

Total number of CVEs with associated security rules affecting given account.

#### Memberof

Dashboard

***

### system\_count

> **system\_count**: `number`

Defined in: [api.ts:554](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L554)

Total systems registered to Vulnerability service (with applied filtering).

#### Memberof

Dashboard
