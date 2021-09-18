import { LogoutOptions } from '../types'
import Cache from './cache'

export default class Logout {
  type: string
  keyName: string
  enable: boolean
  stagnateTime: number
  detectTime: number
  cache: Cache

  constructor(options: LogoutOptions) {
    this.type = options.type || 'cache'
    this.keyName = options.keyName || 'token'
    this.enable = options.enable || true
    this.stagnateTime = options.stagnateTime || 30 * 60 * 1000
    this.detectTime = options.detectTime || 10 * 1000
    this.cache = new Cache(this.keyName, options.clearAll)
    this.init()
  }

  start(): void {
    setInterval(this.detect.bind(this), this.detectTime)
  }

  detect(): void {
    if (this.enable) {
      const currentTime = new Date().getTime() // 记录这次点击的时间
      const cache = this.cache
      const lastTime = cache.getCacheTime.apply(cache)
      // 判断上次最后一次点击的时间和这次点击的时间间隔是否设定停滞时间
      if (currentTime - lastTime > this.stagnateTime) {
        const hasLogin = cache.hasLogin.apply(cache)
        // 如果是登录状态，退出登录
        if (hasLogin) {
          cache.removeCache.apply(cache)
        }
      }
    }
  }

  init(): void {
    // 监听页面刷新、鼠标事件、鼠标移动、键盘事件 更新最后一次点击时间
    const cache = this.cache
    window.onload = function () {
      cache.setCacheTime.apply(cache)
    }
    window.document.onmousedown = function () {
      cache.setCacheTime.apply(cache)
    }
    window.document.onmouseover = function () {
      cache.setCacheTime.apply(cache)
    }
    window.document.onkeydown = function () {
      cache.setCacheTime.apply(cache)
    }
  }
}
