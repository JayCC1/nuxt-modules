<script setup lang="ts">
interface BannerData {
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

const bannerData = ref<BannerData | null>(null)
const getBannerData = async () => {
  // 注入响应数据的类型：Res
  const { data, pending, error, refresh } = await useFetch<BannerData>('/api/setting/banner')
  bannerData.value = data.value
}

const code = ref<Code | null>(null)
const getCode = async () => {
  // 注入响应数据的类型：Code
  const { data, pending, error, refresh } = await useFetch<Code>('/api/auth/send-code', {
    method: 'post',
    body: {
      account: 13813801380,
      code_type: 2,
    },
  })
  code.value = data.value
}
</script>

<template>
  <div class="ys-playground">
    <h1>首页</h1>

    <div class="ys-playground__button">
      <div class="ys-playground__button-item">
        <div class="button" @click="getBannerData()">测试 Get 请求</div>
        <div class="data">
          <img v-if="bannerData" :src="bannerData?.data[0].file_url" alt="banner" />
        </div>
      </div>
      <div class="ys-playground__button-item">
        <div class="button" @click="getCode()">测试 POST 请求</div>
        <div class="data">{{ code?.code }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ys-playground {
  width: 50vw;
  height: 50vh;
  margin: 100px auto 0;
  box-shadow: 0 0 4px 2px #eee;

  h1 {
    text-align: center;
  }
}
.ys-playground__button {
  display: flex;
  justify-content: space-around;
}

.ys-playground__button-item {
  width: 50%;

  .button {
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background-color: #05a86b;
    border-radius: 4px;
    margin: 0 auto;
  }
  .data {
    width: 100%;
    text-align: center;
    margin-top: 20px;
    img {
      width: 100%;
    }
  }
}
</style>
