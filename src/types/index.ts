export interface LogoutOptions {
  enable?: boolean
  keyName?: string
  stagnateTime?: number
  detectTime?: number
}

export interface Target {
  el: HTMLElement | Window
  ref: number
}
