English | [简体中文](./README.zh-CN.md)

# vue-auto-logout

## Project

The `vue` project with login function will be automatically logged out of the system if it has not been operated for a long time.

## Install

```bash
$ npm install vue-auto-logout -S
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
| `stagnateTime` | No operation dead time | `30min` | `Number` |
| `detectTime` | How many seconds to check whether to log out | `10s` | `Number` |
