<template>
  <NuxtPage />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.ys-playground {
  overflow: hidden;
  width: 100%;
}
.ys-playground__banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 340px;
  img {
    height: 300px;
  }
}
.ys-playground__banner-button-get {
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #18816a;
  border-radius: 4px;
  margin: 0 auto;
  cursor: pointer;
}

.ys-playground__link {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.ys-playground__link-button {
  width: 140px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background-color: #18816a;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
  }
}

.ys-playground__login {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #18816a;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
}
</style>
