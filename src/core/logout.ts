import Cookies from 'js-cookie'
import { LogoutOptions } from '../types'

const LAST_TIME = 'logout_last_time'

export default class Logout {
  keyName: string
  enable: boolean
  stagnateTime: number
  detectTime: number

  constructor(options: LogoutOptions) {
    this.keyName = options.keyName || 'token'
    this.enable = options.enable || true
    this.stagnateTime = options.stagnateTime || 30 * 60 * 1000
    this.detectTime = options.detectTime || 10 * 1000
    this.init()
  }

  start(): void {
    setInterval(this.detect.bind(this), this.detectTime)
  }

  detect(): void {
    if (this.enable) {
      const currentTime = new Date().getTime() // 记录这次点击的时间
      const lastTime = Number(Cookies.get(LAST_TIME))
      // 判断上次最后一次点击的时间和这次点击的时间间隔是否大于30分钟
      if (currentTime - lastTime > this.stagnateTime) {
        const hasLogin = Cookies.get(this.keyName)
        // 如果是登录状态，退出登录
        if (hasLogin !== undefined) {
          Cookies.remove(this.keyName)
          const { origin } = window.location
          window.location.href = origin
        }
      }
    }
  }

  init(): void {
    // 监听页面刷新、鼠标事件、鼠标移动、键盘事件 更新最后一次点击时间
    window.onload = function () {
      setLastTime()
    }
    window.document.onmousedown = function () {
      console.log('onmousedown')
      setLastTime()
    }
    window.document.onmouseover = function () {
      console.log('onmouseover')
      setLastTime()
    }
    window.document.onkeydown = function () {
      console.log('onkeydown')
      setLastTime()
    }
    function setLastTime() {
      const lastTime = new Date().getTime() + ''
      Cookies.set(LAST_TIME, lastTime)
    }
  }
}
