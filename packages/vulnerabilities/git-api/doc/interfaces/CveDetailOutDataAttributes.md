[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / CveDetailOutDataAttributes

# Interface: CveDetailOutDataAttributes

Defined in: [api.ts:210](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L210)

## Export

CveDetailOutDataAttributes

## Properties

### advisories\_list

> **advisories\_list**: `string`[] \| `null`

Defined in: [api.ts:342](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L342)

List of advisory names or detailed advisory information

#### Memberof

CveDetailOutDataAttributes

***

### affected\_but\_not\_vulnerable

> **affected\_but\_not\_vulnerable**: `number` \| `null`

Defined in: [api.ts:354](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L354)

Number of systems that are affected by given CVE but are not vulnerable.

#### Memberof

CveDetailOutDataAttributes

***

### affected\_systems?

> `optional` **affected\_systems**: `number` \| `null`

Defined in: [api.ts:360](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L360)

Number of systems that are overall affected by given CVE

#### Memberof

CveDetailOutDataAttributes

***

### business\_risk

> **business\_risk**: `string`

Defined in: [api.ts:216](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L216)

Business risk of the vulnerability.

#### Memberof

CveDetailOutDataAttributes

***

### business\_risk\_id

> **business\_risk\_id**: `number`

Defined in: [api.ts:222](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L222)

Internal ID of the vulnerability business risk.

#### Memberof

CveDetailOutDataAttributes

***

### business\_risk\_text

> **business\_risk\_text**: `string` \| `null`

Defined in: [api.ts:228](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L228)

Complementary text to the business risk.

#### Memberof

CveDetailOutDataAttributes

***

### celebrity\_name

> **celebrity\_name**: `string` \| `null`

Defined in: [api.ts:234](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L234)

\"Celebrity\" name of the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### cvss2\_metrics

> **cvss2\_metrics**: `string` \| `null`

Defined in: [api.ts:240](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L240)

cvss2 metrics of the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### cvss2\_score

> **cvss2\_score**: `string` \| `null`

Defined in: [api.ts:246](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L246)

String representation of cvss2 score of the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### cvss3\_metrics

> **cvss3\_metrics**: `string` \| `null`

Defined in: [api.ts:252](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L252)

cvss3 metrics of the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### cvss3\_score

> **cvss3\_score**: `string` \| `null`

Defined in: [api.ts:258](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L258)

String representation of cvss3 score of the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### description

> **description**: `string`

Defined in: [api.ts:264](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L264)

Description of the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### impact

> **impact**: `string`

Defined in: [api.ts:276](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L276)

Red Hat security impact of the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### known\_exploit

> **known\_exploit**: `boolean`

Defined in: [api.ts:348](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L348)

Shows whether a CVE has known exploits or not

#### Memberof

CveDetailOutDataAttributes

***

### modified\_date

> **modified\_date**: `string` \| `null`

Defined in: [api.ts:270](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L270)

String representation of ISO-8601 formatted date of last modification of the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### public\_date

> **public\_date**: `string` \| `null`

Defined in: [api.ts:282](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L282)

String representation of ISO-8601 formatted date of first public disclosure of the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### redhat\_url

> **redhat\_url**: `string` \| `null`

Defined in: [api.ts:288](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L288)

Additional resource about the CVE, provided by Red Hat.

#### Memberof

CveDetailOutDataAttributes

***

### rules

> **rules**: [`InsightsRule`](InsightsRule.md)[]

Defined in: [api.ts:294](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L294)

#### Memberof

CveDetailOutDataAttributes

***

### secondary\_url

> **secondary\_url**: `string` \| `null`

Defined in: [api.ts:300](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L300)

Additional resources about the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### status

> **status**: `string`

Defined in: [api.ts:306](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L306)

Status of the vulnerability.

#### Memberof

CveDetailOutDataAttributes

***

### status\_id

> **status\_id**: `number`

Defined in: [api.ts:312](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L312)

Internal ID of the vulnerability status.

#### Memberof

CveDetailOutDataAttributes

***

### status\_text

> **status\_text**: `string` \| `null`

Defined in: [api.ts:318](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L318)

Complementary text to the status.

#### Memberof

CveDetailOutDataAttributes

***

### synopsis

> **synopsis**: `string`

Defined in: [api.ts:324](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L324)

Synopsis of the CVE.

#### Memberof

CveDetailOutDataAttributes

***

### systems\_status\_detail

> **systems\_status\_detail**: `object`

Defined in: [api.ts:330](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L330)

Counts of systems with given status type.

#### Memberof

CveDetailOutDataAttributes

***

### systems\_status\_divergent

> **systems\_status\_divergent**: `number`

Defined in: [api.ts:336](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/git-api/api.ts#L336)

How many systems-CVE pairs have different status than CVE-level.

#### Memberof

CveDetailOutDataAttributes
