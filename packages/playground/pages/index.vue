<script setup lang="ts">
import Cookie from 'js-cookie'

interface Res {
  code: number
  data: Array<{
    id: number
    file_url: string
    title: string
  }>
  error: []
  message: string
  success: boolean
}

interface UseFetchOptions<Res> {}

const bannerData = ref<Res | null>(null)
const getBannerData = async () => {
  const { data, pending, error, refresh } = await useFetch('/api/auth/send-code', {
    method: 'post',
    body: {
      account: 15622274882,
      code_type: 2,
    },
  })
  console.log(data.value?.data.code)
}
const out = () => {
  Cookie.remove('access_token')
}
</script>

<template>
  <div class="ys-playground">
    <div class="ys-playground__banner">
      <div class="ys-playground__banner-button">
        <div class="ys-playground__banner-button-get" @click="getBannerData()">测试反向代理</div>
      </div>
      <img v-if="bannerData" :src="bannerData?.data[0].file_url" alt="banner" />
    </div>

    <div class="ys-playground__link">
      <div class="ys-playground__link-button">
        <NuxtLink to="/product">产品列表</NuxtLink>
      </div>
      <div class="ys-playground__link-button">
        <NuxtLink to="/order">订单列表</NuxtLink>
      </div>
      <div class="ys-playground__link-button">
        <NuxtLink to="/login">登录</NuxtLink>
      </div>
      <div class="ys-playground__link-button">
        <NuxtLink to="/register">注册</NuxtLink>
      </div>
      <div class="ys-playground__link-button" @click="out()">退出登录</div>
    </div>
  </div>
</template>
