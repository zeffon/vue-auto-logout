import App from './App.vue'
import logoutPlugin from '../../src/index'
import { createApp } from 'vue'

const logoutOptions = {
  keyName: 'token',
  stagnateTime: 10 * 1000,
  detectTime: 3 * 1000
}

const app = createApp(App)
app.use(logoutPlugin, logoutOptions)
app.mount('#app')
