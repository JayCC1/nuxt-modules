<script setup lang="ts">
const { login } = useAuth()
</script>

<template>
  <div class="ys-playground-login">
    <div class="ys-playground__button" @click="login('123')">Login</div>
  </div>
</template>

<style lang="scss" scoped>
.ys-playground-login {
  width: 50vw;
  height: 50vh;
  text-align: center;
  padding: 10px;
  margin: 100px auto 0;
  box-shadow: 0 0 4px 2px #eee;
}
.ys-playground__button {
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #05a86b;
  border-radius: 4px;
  margin: 40px auto;
}
</style>
