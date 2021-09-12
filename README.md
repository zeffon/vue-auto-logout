[English](./README-en.md) | 简体中文

# vue-auto-logout [![NPM version](https://img.shields.io/npm/v/vue-auto-logout.svg?style=flat)](https://npmjs.org/package/vue-auto-logout)

## 项目

拥有登录功能的 `vue` 项目长时间未操作，会自动登出系统。满足条件如下：

1. `PC端`Web 的`Vue`项目
2. 系统拥有`登录功能`相关的权限机制
3. `token`等登录标识是存储`浏览器任意缓存中`

## 安装

```bash
$ npm install vue-auto-logout
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
| `clearAll`     | 是否清除该站点下所有缓存值 | `true`  | `Boolean` |
| `stagnateTime` | 无操作停滞时间             | `30min` | `Number`  |
| `detectTime`   | 多少秒进行检测是否登出     | `10s`   | `Number`  |
