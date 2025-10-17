[**@redhat-cloud-services/vulnerabilities-client**](../README.md)

***

[@redhat-cloud-services/vulnerabilities-client](../globals.md) / Configuration

# Class: Configuration

Defined in: [configuration.ts:24](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/configuration.ts#L24)

## Constructors

### Constructor

> **new Configuration**(`param`): `Configuration`

Defined in: [configuration.ts:67](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/configuration.ts#L67)

#### Parameters

##### param

[`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) = `{}`

#### Returns

`Configuration`

## Properties

### accessToken?

> `optional` **accessToken**: `string` \| (`name?`, `scopes?`) => `string`

Defined in: [configuration.ts:51](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/configuration.ts#L51)

parameter for oauth2 security

#### Param

security name

#### Param

oauth2 scope

#### Memberof

Configuration

***

### apiKey?

> `optional` **apiKey**: `string` \| `Promise`\<`string`\> \| (`name`) => `string` \| (`name`) => `Promise`\<`string`\>

Defined in: [configuration.ts:30](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/configuration.ts#L30)

parameter for apiKey security

#### Param

security name

#### Memberof

Configuration

***

### baseOptions?

> `optional` **baseOptions**: `any`

Defined in: [configuration.ts:65](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/configuration.ts#L65)

base options for axios calls

#### Memberof

Configuration

***

### basePath?

> `optional` **basePath**: `string`

Defined in: [configuration.ts:58](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/configuration.ts#L58)

override base path

#### Memberof

Configuration

***

### password?

> `optional` **password**: `string`

Defined in: [configuration.ts:44](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/configuration.ts#L44)

parameter for basic security

#### Memberof

Configuration

***

### username?

> `optional` **username**: `string`

Defined in: [configuration.ts:37](https://github.com/charlesmulder/javascript-clients/blob/main/packages/vulnerabilities/configuration.ts#L37)

parameter for basic security

#### Memberof

Configuration
