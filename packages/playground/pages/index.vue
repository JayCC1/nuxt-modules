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

interface Code {
  code: number
  data: {
    code: number
  }
  error: []
  message: string
  success: boolean
}

const bannerData = ref<Res | null>(null)
const getBannerData = async () => {
  // 注入响应数据的类型：Res
  const { data, pending, error, refresh } = await useFetch<Res>('/api/setting/banner')

  // 可以获得类型提示
  console.log(data.value?.data[0].id)
}
const getCode = async () => {
  /**
   * https://github.com/nuxt/nuxt/issues/19077
   * 根据 issue 描述，这是 Nuxt v3.2.0 的 bug，即：
   * 在非 get 请求的情况下，注入类型后 TS 报错，无法获得类型提示
   * 临时方案，post 请求为例：useFetch<Code> 修改为 useFetch<Code, Error, string, 'post' | 'get'> 可重新获得类型提示
   * -------------------------- */

  // 注入响应数据的类型：Code
  const { data, pending, error, refresh } = await useFetch<Code, Error, string, 'post' | 'get'>(
    '/api/auth/send-code',
    {
      method: 'post',
      body: {
        account: 13813801380,
        code_type: 2,
      },
    }
  )

  // 可以获得类型提示
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
        <div class="ys-playground__banner-button-get" @click="getCode()">测试 POST 请求</div>
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
