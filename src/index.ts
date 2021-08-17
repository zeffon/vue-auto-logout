import { App } from 'vue'
import { LogoutOptions } from './types'
import Logout from './core/logout'

const logoutPlugin = {
  install(app: App, options: LogoutOptions): void {
    const logout = new Logout(options)
    logout.start.call(logout)
    app.directive('logout')
  }
}

export default logoutPlugin
