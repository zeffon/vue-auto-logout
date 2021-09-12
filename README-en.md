English | [简体中文](./README.md)

# vue-auto-logout [![NPM version](https://img.shields.io/npm/v/vue-auto-logout.svg?style=flat)](https://npmjs.org/package/vue-auto-logout)

## Project

The `vue` project with login function will be automatically logged out of the system if it has not been operated for a long time.The conditions are as follows:

1. The `Vue` project of the `Web on the PC side`
2. The system has a permission mechanism related to the `login function`
3. The login identifiers such as `token` are stored in the `browser arbitrary cache`

## Install

```bash
$ npm install vue-auto-logout
or
$ yarn add vue-auto-logout -S
```

## Usage

main.js:

```js
import { createApp } from 'vue'
import App from './app'
import logoutPlugin from 'vue-auto-logout'

const app = createApp(App)
const logoutOptions = {
  stagnateTime: 30 * 60 * 1000,
  detectTime: 30 * 60
}
app.use(logoutPlugin, logoutOptions)
app.mount('#app')
```

## Logout Options

| key | description | default | options |
| :-- | --- | --- | --- |
| `enable` | Turn on automatic logout | `true` | `Boolean` |
| `keyName` | The `key` name of the `token` in the cache | `token` | `String` |
| `clearAll` | Whether to clear all cached values ​​under this site | `true` | `Boolean` |
| `stagnateTime` | No operation dead time | `30min` | `Number` |
| `detectTime` | How many seconds to check whether to log out | `10s` | `Number` |
