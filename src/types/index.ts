export interface LogoutOptions {
  type?: string
  enable?: boolean
  keyName?: string
  stagnateTime?: number
  detectTime?: number
  clearAll?: boolean
}

export type CacheType = 'Cookie' | 'LocalStorage' | 'SessionStorage'
