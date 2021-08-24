import Cookies from 'js-cookie'
import { CacheType } from '@/types'
import { clearCookies } from '../helpers'

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
    return Number(window.localStorage.getItem(LAST_TIME))
  }

  setCacheTime(): void {
    const lastTime = new Date().getTime() + ''
    window.localStorage.setItem(LAST_TIME, lastTime)
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
      clearCookies()
      localStorage.clear()
      sessionStorage.clear()
    }
    location.reload()
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
}
