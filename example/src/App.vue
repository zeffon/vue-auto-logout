<template>
  <div class="container">
    <div v-if="isLogin">
      当前已登录
      <button @click="logout">退出</button>
    </div>
    <div v-else>
      当前还未登录
      <button @click="login">请登录</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Cookies from 'js-cookie'

export default defineComponent({
  setup() {
    const status = computed(() => {
      const token = Cookies.get('token')
      return token === undefined ? false : true
    })

    let isLogin = ref(status.value)

    function login() {
      isLogin.value = true
      Cookies.set('token', 'Von38vetN9YGeYKtjrMsSb89')
    }
    function logout() {
      isLogin.value = false
      Cookies.remove('token')
    }
    return {
      isLogin,
      login,
      logout
    }
  }
})
</script>
