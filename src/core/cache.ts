import Cookies from 'js-cookie'
import { CacheType } from '@/types'

const LAST_TIME = 'logout_last_time'

export default class Cache {
  type: CacheType
  LoginStatus: boolean
  keyName: string

  constructor(keyName: string) {
    this.keyName = keyName
    this.type = 'Cookie'
    this.LoginStatus = false
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
    if (this.type === 'Cookie') {
      Cookies.remove(keyName)
    }
    if (this.type === 'LocalStorage') {
      localStorage.removeItem(keyName)
    }
    if (this.type === 'SessionStorage') {
      sessionStorage.removeItem(keyName)
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
}
