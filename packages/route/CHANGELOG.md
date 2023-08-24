# [1.8.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.7.1...v1.8.0) (2023-08-24)

### ✨Features

- **route:** 新增助手 `useToLogin` `useLoginSuccess` 以代替 `$toLogin` `$loginSuccess` ([94767c9](https://github.com/spruce-hub/nuxt-modules/commit/94767c9d2dcdff590615de29de3f3145a04909b6))

## [1.7.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.7.0...v1.7.1) (2023-08-22)

# [1.7.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.6.1...v1.7.0) (2023-08-16)

### ✨Features

- **route:** 登录状态阻止访问 `excludePath` 内的路由 ([055bc2b](https://github.com/spruce-hub/nuxt-modules/commit/055bc2b076205c26ff44c5da4dfeec51d8b2d28d))

### 🐛Bug Fixes

- **route:** 从 `nuxtRoute.cookieName` 中读取 cookie 的值 ([6f32eab](https://github.com/spruce-hub/nuxt-modules/commit/6f32eab93631840ae67b5b7240e55f84b9bd20aa))

## [1.6.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.6.0...v1.6.1) (2023-08-12)

# [1.6.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.5.1...v1.6.0) (2023-08-12)

### 🛠️Chore

- update config ([9e14bad](https://github.com/spruce-hub/nuxt-modules/commit/9e14bade9fcf1d9a4cd5d259da238b8a063bf94a))

## [1.5.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.5.0...v1.5.1) (2023-07-17)

### 🐛Bug Fixes

- **route:** 当 `$loginSuccess` 只有一个参数 `token` 时，也能正常重定向 ([c65c79c](https://github.com/spruce-hub/nuxt-modules/commit/c65c79c2f2e53469fc054aacadfd4be3e51c9681))

### 🛠️Chore

- update deps ([cac485a](https://github.com/spruce-hub/nuxt-modules/commit/cac485a13dfe63bc88ff3addc4c2221e82110915))

# [1.5.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.4.1...v1.5.0) (2023-07-16)

### ✨Features

- **route:** 增强 Helper ([ca3c508](https://github.com/spruce-hub/nuxt-modules/commit/ca3c508ce273b228213cab305cb6b9b155f97a78))

## [1.4.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.4.0...v1.4.1) (2023-07-13)

### 🐛Bug Fixes

- **route:** 当路由拦截发生在服务端时，客户端从 cookie 中获取目标路由 ([addbb09](https://github.com/spruce-hub/nuxt-modules/commit/addbb09ac0fafb8737300bcd63672628942326af))

# [1.4.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.3.3...v1.4.0) (2023-07-13)

### ✨Features

- **route:** 添加 `$loginSuccess` 的类型声明 ([e50757d](https://github.com/spruce-hub/nuxt-modules/commit/e50757d60d1d73555dbfd15ae67975f897f86551))
- **route:** `$loginSuccess` 可通过 useCookie 设置 cookie 的其他属性 ([9cb4701](https://github.com/spruce-hub/nuxt-modules/commit/9cb4701757d8e4ad242dc65b72e3d702da7e7d30))

### 🐛Bug Fixes

- 需要导出配置类型 ([87fa161](https://github.com/spruce-hub/nuxt-modules/commit/87fa161949e1afff8f75d216363bebf1ed6c6ec4))

### 🛠️Chore

- 增强类型、文档、演示 ([75e3d7f](https://github.com/spruce-hub/nuxt-modules/commit/75e3d7f9a8461cde3423141f0d00b0a24743c5cc))

## [1.3.3](https://github.com/spruce-hub/nuxt-modules/compare/v1.3.2...v1.3.3) (2023-07-12)

### 🐛Bug Fixes

- **route:** 待验证路由以 `/` 结尾时，尽管不是子路由也应该判断为 `true` ([8f04c5c](https://github.com/spruce-hub/nuxt-modules/commit/8f04c5cb470bb3abb91eab48165e18006ff7d319))

## [1.3.2](https://github.com/spruce-hub/nuxt-modules/compare/v1.3.1...v1.3.2) (2023-07-05)

### 🐛Bug Fixes

- **route:** 修复在服务端获取 cookie 失败的问题 ([e2ae5e1](https://github.com/spruce-hub/nuxt-modules/commit/e2ae5e1717f2607f76baecb1a0eabbfdf9eac15b))

## [1.3.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.3.0...v1.3.1) (2023-07-04)

### 🐛Bug Fixes

- **route:** 修复路由匹配错误的问题 ([6aa4087](https://github.com/spruce-hub/nuxt-modules/commit/6aa4087adc1fb2a947fa342be9a97b8bba369c13))

# [1.3.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.2.0...v1.3.0) (2023-07-02)

### 🔨Code Refactoring

- **route:** 重构了多项定义 ([459d97b](https://github.com/spruce-hub/nuxt-modules/commit/459d97b41a2883b6895cfcd6be36ff06784f590e))

# [1.2.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.1.2...v1.2.0) (2023-07-01)

### 🐛Bug Fixes

- **route:** 修复在浏览器环境下无法匹配路由的错误 ([977adac](https://github.com/spruce-hub/nuxt-modules/commit/977adace30fa0f52d0b2f73d11d77dd14c4c8b71))

## [1.1.2](https://github.com/spruce-hub/nuxt-modules/compare/v1.1.1...v1.1.2) (2023-07-01)

### 🐛Bug Fixes

- **route:** 使用支持 ESM 模块的 anymatch 代替 minimatch ([9db764f](https://github.com/spruce-hub/nuxt-modules/commit/9db764ff80e42130a3be8b0875a12535ed67b26f))

### 🛠️Chore

- update deps ([ced85fa](https://github.com/spruce-hub/nuxt-modules/commit/ced85fa6af8011fb9835bf9a0eee4dcdbf5c8cfc))

## [1.1.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.1.0...v1.1.1) (2023-05-31)

### 🐛Bug Fixes

- **route:** 显式导出 nuxt 方法 ([9cb5bf5](https://github.com/spruce-hub/nuxt-modules/commit/9cb5bf521beb6629e704cd3502a78679e72fbc67))

### 🛠️Chore

- update config ([4f528bb](https://github.com/spruce-hub/nuxt-modules/commit/4f528bb6af72c55727dbdb25dd0b41a9db812248))

## [1.0.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.0.0...v1.0.1) (2023-04-20)

### 🐛Bug Fixes

- **route:** 不需要主动扩展 `@nuxt/schema` 模块 ([be4177e](https://github.com/spruce-hub/nuxt-modules/commit/be4177ec616fbdc49a740f06c5a4b1161f50ca49))

### 🛠️Chore

- update config ([a3cad1c](https://github.com/spruce-hub/nuxt-modules/commit/a3cad1c01be738b1ef50d2f29a3e4d46d6a81450))
- update config ([a917da3](https://github.com/spruce-hub/nuxt-modules/commit/a917da36631bfa4f90ec688a0bfcc4c39773ebcd))

# [1.0.0](https://github.com/spruce-hub/nuxt-modules/compare/e7c09ae3a09ae8c64476cdec35bedebb349581f1...v1.0.0) (2023-03-28)

### ✨Features

- first commit ([e7c09ae](https://github.com/spruce-hub/nuxt-modules/commit/e7c09ae3a09ae8c64476cdec35bedebb349581f1))

### 🐛Bug Fixes

- **route:** param is optional ([64e590c](https://github.com/spruce-hub/nuxt-modules/commit/64e590cd59b1600332637e4cadcd376937d3fb05))
- **route:** add type annotation ([826bb55](https://github.com/spruce-hub/nuxt-modules/commit/826bb55ece7962fc775afc10005dfedb449f4c62))
