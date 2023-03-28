<script setup lang="ts">
const { $loginSuccess } = useNuxtApp()
const login = () => {
  const token = '123'
  // ···
  $loginSuccess(token)
}
</script>

<template>
  <div>
    <div class="ys-playground__link-button">
      <NuxtLink to="/">首页</NuxtLink>
    </div>
    <div class="ys-playground__login" @click="login()">Login</div>
  </div>
</template>
