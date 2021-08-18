import Cookies from 'js-cookie'
import { CacheType } from '@/types'

const LAST_TIME = 'logout_last_time'

export default class Cache {
  type: CacheType
  LoginStatus: boolean
  keyName: string
  clearAll: boolean

  constructor(keyName: string, clearAll = true) {
    this.keyName = keyName
    this.type = 'Cookie'
    this.LoginStatus = false
    this.clearAll = clearAll
    this.init()
  }

  hasLogin(): boolean {
    this.init()
    return this.LoginStatus
  }

  getCacheTime(): number {
    return Number(Cookies.get(LAST_TIME))
  }

  setCacheTime(): void {
    const lastTime = new Date().getTime() + ''
    Cookies.set(LAST_TIME, lastTime)
  }

  removeCache(): void {
    const keyName = this.keyName
    const clearAll = this.clearAll
    const type = this.type
    switch (type) {
      case 'Cookie':
        Cookies.remove(keyName)
        break
      case 'LocalStorage':
        localStorage.removeItem(keyName)
        break
      case 'SessionStorage':
        sessionStorage.removeItem(keyName)
    }
    if (clearAll) {
      this.clearCookies()
      localStorage.clear()
      sessionStorage.clear()
    }
    const { origin } = window.location
    window.location.href = origin
  }

  private init(): void {
    const keyName = this.keyName
    let token = Cookies.get(keyName)
    if (token !== undefined) {
      this.type = 'Cookie'
      this.LoginStatus = true
    }
    token = localStorage.getItem(keyName) as string
    if (token !== null) {
      this.type = 'LocalStorage'
      this.LoginStatus = true
    }
    token = sessionStorage.getItem(keyName) as string
    if (token !== null) {
      this.type = 'SessionStorage'
      this.LoginStatus = true
    }
  }

  private clearCookies(): void {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i]
      const eqPos = cookie.indexOf('=')
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
  }
}
