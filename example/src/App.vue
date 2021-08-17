<template>
  <div class="container">
    <div>
      当前的缓存类型：
      <select v-model="selectType">
        <option v-for="item in CacheTypes" :key="item">{{ item }}</option>
      </select>
    </div>
    <div v-if="isLogin">
      当前<span style="color: green">已登录</span>
      <button @click="logout">退出</button>
    </div>
    <div v-else>
      当前<span style="color: red">未登录</span>
      <button @click="login">请登录</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Cookies from 'js-cookie'

const CacheTypes = ['Cookie', 'LocalStorage', 'SessionStorage']

export default defineComponent({
  setup() {
    const selectType = ref(CacheTypes[0])
    const tokenKey = 'token'

    const status = computed(() => {
      const token =
        Cookies.get(tokenKey) ||
        localStorage.getItem(tokenKey) ||
        sessionStorage.getItem(tokenKey)
      return token === null ? false : true
    })

    let isLogin = ref(status.value)

    function login() {
      isLogin.value = true
      set(selectType.value)
    }

    function logout() {
      isLogin.value = false
      remove(selectType.value)
    }

    function set(type: string) {
      if (type === CacheTypes[0]) {
        Cookies.set(tokenKey, 'Von38vetN9YGeYKtjrMsSb89')
      }
      if (type === CacheTypes[1]) {
        localStorage.setItem(tokenKey, 'Von38vetN9YGeYKtjrMsSb89')
      }
      if (type === CacheTypes[2]) {
        sessionStorage.setItem(tokenKey, 'Von38vetN9YGeYKtjrMsSb89')
      }
    }

    function remove(type: string) {
      if (type === CacheTypes[0]) {
        Cookies.remove(tokenKey)
      }
      if (type === CacheTypes[1]) {
        localStorage.removeItem(tokenKey)
      }
      if (type === CacheTypes[2]) {
        sessionStorage.removeItem(tokenKey)
      }
    }

    return {
      isLogin,
      login,
      logout,
      selectType,
      CacheTypes
    }
  }
})
</script>
