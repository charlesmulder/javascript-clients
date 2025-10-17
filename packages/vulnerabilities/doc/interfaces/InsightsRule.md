[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / InsightsRule

# Interface: InsightsRule

Defined in: [api.ts:1076](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1076)

## Export

InsightsRule

## Properties

### associated\_cves

> **associated\_cves**: `string`[]

Defined in: [api.ts:1124](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1124)

List of CVEs associated with the rule.

#### Memberof

InsightsRule

***

### change\_risk

> **change\_risk**: `number` \| `null`

Defined in: [api.ts:1112](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1112)

Indicates how likely remediation can change environment on the remediatied system.

#### Memberof

InsightsRule

***

### description

> **description**: `string` \| `null`

Defined in: [api.ts:1088](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1088)

Description of the rule.

#### Memberof

InsightsRule

***

### kbase\_node\_id

> **kbase\_node\_id**: `number` \| `null`

Defined in: [api.ts:1118](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1118)

ID of associated Red Hat knowledgebase article.

#### Memberof

InsightsRule

***

### playbook\_count

> **playbook\_count**: `number` \| `null`

Defined in: [api.ts:1106](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1106)

Number of available Ansible playbooks for remediation/mitigation.

#### Memberof

InsightsRule

***

### publish\_date

> **publish\_date**: `string` \| `null`

Defined in: [api.ts:1142](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1142)

Date when the rule was published.

#### Memberof

InsightsRule

***

### reboot\_required

> **reboot\_required**: `boolean` \| `null`

Defined in: [api.ts:1100](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1100)

Indicator whter reboot is required to mitigate vulnerability.

#### Memberof

InsightsRule

***

### rule\_id

> **rule\_id**: `string`

Defined in: [api.ts:1082](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1082)

ID(s) of associated security rule(s).

#### Memberof

InsightsRule

***

### rule\_impact

> **rule\_impact**: `number` \| `null`

Defined in: [api.ts:1130](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1130)

Shows rules impact number from 1 to 4

#### Memberof

InsightsRule

***

### summary

> **summary**: `string` \| `null`

Defined in: [api.ts:1094](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1094)

Summary of the rule.

#### Memberof

InsightsRule

***

### systems\_affected?

> `optional` **systems\_affected**: `number`

Defined in: [api.ts:1136](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/api.ts#L1136)

Number of systems affected by the rule.

#### Memberof

InsightsRule
