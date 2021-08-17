[English](./README.md) | 简体中文

# vue-auto-logout

## 项目

拥有登录功能的 `vue` 项目长时间未操作,会自动登出系统。

## 安装

```bash
$ npm install vue-auto-logout -S
or
$ yarn add vue-auto-logout -S
```

## 用法

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

## 参数

| 字段           | 描述                       | 默认值  | 类型      |
| :------------- | -------------------------- | ------- | --------- |
| `enable`       | 是否开启自动登出           | `true`  | `Boolean` |
| `keyName`      | 缓存中的`token`的`key`名称 | `token` | `String`  |
| `stagnateTime` | 无操作停滞时间             | `30min` | `Number`  |
| `detectTime`   | 多少秒进行检测是否登出     | `10s`   | `Number`  |
