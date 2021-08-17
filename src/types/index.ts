export interface LogoutOptions {
  enable?: boolean
  keyName?: string
  stagnateTime?: number
  detectTime?: number
  clearAll?: boolean
}

export type CacheType = 'Cookie' | 'LocalStorage' | 'SessionStorage'
