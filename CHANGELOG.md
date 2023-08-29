# [1.9.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.8.0...v1.9.0) (2023-08-29)

### ✨Features

- **route:** 登录成功时记录登录时间 ([2a26a4d](https://github.com/spruce-hub/nuxt-modules/commit/2a26a4da92322c09012ad388c0d769cb6f24fe1b))

### 🛠️Chore

- 更新描述 ([dc36ee9](https://github.com/spruce-hub/nuxt-modules/commit/dc36ee9ae97109c3d862a48ef29d919c2cfacf99))

# [1.8.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.7.1...v1.8.0) (2023-08-24)

### ✨Features

- **route:** 新增助手 `useToLogin` `useLoginSuccess` 以代替 `$toLogin` `$loginSuccess` ([94767c9](https://github.com/spruce-hub/nuxt-modules/commit/94767c9d2dcdff590615de29de3f3145a04909b6))

### 🛠️Chore

- update deps ([c3ef296](https://github.com/spruce-hub/nuxt-modules/commit/c3ef296f2ec8df1b6307a69b026c7a7e0fa08c3b))

## [1.7.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.7.0...v1.7.1) (2023-08-22)

### 🐛Bug Fixes

- **fetch:** 代理请求中添加请求头 ([a31802b](https://github.com/spruce-hub/nuxt-modules/commit/a31802b273d3f822238693a70d24ae2ce3758877))

### 🛠️Chore

- update deps ([62a5556](https://github.com/spruce-hub/nuxt-modules/commit/62a555619febddce0af100f19f7573c2a1b50619))

# [1.7.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.6.1...v1.7.0) (2023-08-16)

### ✨Features

- **route:** 登录状态阻止访问 `excludePath` 内的路由 ([055bc2b](https://github.com/spruce-hub/nuxt-modules/commit/055bc2b076205c26ff44c5da4dfeec51d8b2d28d))

### 🐛Bug Fixes

- **fetch:** 更新代码注释 ([6743921](https://github.com/spruce-hub/nuxt-modules/commit/6743921168f9ed7750dfa327a8a37f44108a6127))
- **route:** 从 `nuxtRoute.cookieName` 中读取 cookie 的值 ([6f32eab](https://github.com/spruce-hub/nuxt-modules/commit/6f32eab93631840ae67b5b7240e55f84b9bd20aa))

## [1.6.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.6.0...v1.6.1) (2023-08-12)

### 🐛Bug Fixes

- **fetch:** 删除默认配置 ([1895873](https://github.com/spruce-hub/nuxt-modules/commit/1895873802dd19a4ce92da1b6c357bd114299812))

### 🛠️Chore

- update config ([b6947b0](https://github.com/spruce-hub/nuxt-modules/commit/b6947b095b9958bb20e718e9e9ac9811d04e0945))

# [1.6.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.5.1...v1.6.0) (2023-08-12)

### ✨Features

- **fetch:** 支持多个代理 ([bb5e4cf](https://github.com/spruce-hub/nuxt-modules/commit/bb5e4cfdedb3e0245ec4021aa2115d3c2b2cf0dc))

### 🛠️Chore

- update config ([3ecee69](https://github.com/spruce-hub/nuxt-modules/commit/3ecee696f82eb21bc58bbb74e3208c20ecfe5b5a))
- update config ([9e14bad](https://github.com/spruce-hub/nuxt-modules/commit/9e14bade9fcf1d9a4cd5d259da238b8a063bf94a))

## [1.5.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.5.0...v1.5.1) (2023-07-17)

### 🐛Bug Fixes

- **route:** 当 `$loginSuccess` 只有一个参数 `token` 时，也能正常重定向 ([c65c79c](https://github.com/spruce-hub/nuxt-modules/commit/c65c79c2f2e53469fc054aacadfd4be3e51c9681))

### 🛠️Chore

- update deps ([cac485a](https://github.com/spruce-hub/nuxt-modules/commit/cac485a13dfe63bc88ff3addc4c2221e82110915))

# [1.5.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.4.1...v1.5.0) (2023-07-16)

### ✨Features

- **route:** 增强 Helper ([ca3c508](https://github.com/spruce-hub/nuxt-modules/commit/ca3c508ce273b228213cab305cb6b9b155f97a78))

### 🛠️Chore

- update deps ([79d267f](https://github.com/spruce-hub/nuxt-modules/commit/79d267f6b725def8d557253537d974e046399df6))

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

### 🛠️Chore

- update playground ([ad5edc3](https://github.com/spruce-hub/nuxt-modules/commit/ad5edc330f5e88638b558b14ed37694511d7afe8))
- update playground ([fbb5563](https://github.com/spruce-hub/nuxt-modules/commit/fbb5563e7e24d76e12c0d787394ea4e30d3a3707))

## [1.3.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.3.0...v1.3.1) (2023-07-04)

### 🐛Bug Fixes

- **route:** 修复路由匹配错误的问题 ([6aa4087](https://github.com/spruce-hub/nuxt-modules/commit/6aa4087adc1fb2a947fa342be9a97b8bba369c13))

# [1.3.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.2.0...v1.3.0) (2023-07-02)

### ✨Features

- **fetch:** 实现了多项代码、功能的优化 ([98fa9e8](https://github.com/spruce-hub/nuxt-modules/commit/98fa9e8487966bb9ffae8c900037f4a0081326f0))

### 🔨Code Refactoring

- **route:** 重构了多项定义 ([459d97b](https://github.com/spruce-hub/nuxt-modules/commit/459d97b41a2883b6895cfcd6be36ff06784f590e))

### 🛠️Chore

- update playground config ([92ab117](https://github.com/spruce-hub/nuxt-modules/commit/92ab11717689216b7f4ad5fdca18d1c0ca54cffd))

# [1.2.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.1.2...v1.2.0) (2023-07-01)

### 🐛Bug Fixes

- **route:** 修复在浏览器环境下无法匹配路由的错误 ([977adac](https://github.com/spruce-hub/nuxt-modules/commit/977adace30fa0f52d0b2f73d11d77dd14c4c8b71))

### 🛠️Chore

- update tsconfig ([46a577e](https://github.com/spruce-hub/nuxt-modules/commit/46a577ed2546fd2dd8a89551491b2bc4c04ba2fa))

## [1.1.2](https://github.com/spruce-hub/nuxt-modules/compare/v1.1.1...v1.1.2) (2023-07-01)

### 🐛Bug Fixes

- **route:** 使用支持 ESM 模块的 anymatch 代替 minimatch ([9db764f](https://github.com/spruce-hub/nuxt-modules/commit/9db764ff80e42130a3be8b0875a12535ed67b26f))

### 🛠️Chore

- 设置浏览器规则 ([a6e3fd6](https://github.com/spruce-hub/nuxt-modules/commit/a6e3fd604a482523caeae4c61d33fba6c3e60eee))
- update deps ([ced85fa](https://github.com/spruce-hub/nuxt-modules/commit/ced85fa6af8011fb9835bf9a0eee4dcdbf5c8cfc))

## [1.1.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.1.0...v1.1.1) (2023-05-31)

### 🐛Bug Fixes

- **fetch:** 修复 `headers` 类型错误的缺陷 ([e603f52](https://github.com/spruce-hub/nuxt-modules/commit/e603f52647706b34bfcb4cfccfe82896d10879e5))
- **route:** 显式导出 nuxt 方法 ([9cb5bf5](https://github.com/spruce-hub/nuxt-modules/commit/9cb5bf521beb6629e704cd3502a78679e72fbc67))

### 🛠️Chore

- update config ([4f528bb](https://github.com/spruce-hub/nuxt-modules/commit/4f528bb6af72c55727dbdb25dd0b41a9db812248))

# [1.1.0](https://github.com/spruce-hub/nuxt-modules/compare/v1.0.3...v1.1.0) (2023-04-25)

### ✨Features

- **fetch:** support retrieving API host from environment variables ([67c3a93](https://github.com/spruce-hub/nuxt-modules/commit/67c3a93df105a7444894eff662169a61fab82c59))

## [1.0.3](https://github.com/spruce-hub/nuxt-modules/compare/v1.0.2...v1.0.3) (2023-04-25)

### 🐛Bug Fixes

- **fetch:** resolve Internal Server Error ([#3](https://github.com/spruce-hub/nuxt-modules/issues/3)) ([a601d82](https://github.com/spruce-hub/nuxt-modules/commit/a601d82442a6ab149a5a442c351bbd046fe3fa6a))

## [1.0.2](https://github.com/spruce-hub/nuxt-modules/compare/v1.0.1...v1.0.2) (2023-04-24)

### 🐛Bug Fixes

- **fetch:** use `proxyRequest` instead of `$fetch` to resolve Internal Server Error ([#3](https://github.com/spruce-hub/nuxt-modules/issues/3)) ([eedb83a](https://github.com/spruce-hub/nuxt-modules/commit/eedb83a12fd06aa2a59fe0b04ea159a81da9d594))

## [1.0.1](https://github.com/spruce-hub/nuxt-modules/compare/v1.0.0...v1.0.1) (2023-04-20)

### 🐛Bug Fixes

- authorization didn't read cookies while been set ([568c59d](https://github.com/spruce-hub/nuxt-modules/commit/568c59d064a76a5a4134b9f5653463ed45a41176))
- **route:** 不需要主动扩展 `@nuxt/schema` 模块 ([be4177e](https://github.com/spruce-hub/nuxt-modules/commit/be4177ec616fbdc49a740f06c5a4b1161f50ca49))
- **fetch:** 不需要主动扩展 `@nuxt/schema` 模块 ([cca86b9](https://github.com/spruce-hub/nuxt-modules/commit/cca86b9be70899092aa20b2fcfd553269a19d9f1))

### 🛠️Chore

- update config ([7c6174f](https://github.com/spruce-hub/nuxt-modules/commit/7c6174fee08b9eb3c440c8eb2a3589837179b375))
- update config ([a3cad1c](https://github.com/spruce-hub/nuxt-modules/commit/a3cad1c01be738b1ef50d2f29a3e4d46d6a81450))
- update config ([79d743a](https://github.com/spruce-hub/nuxt-modules/commit/79d743a8d892edb73d85cb54a438ab05f0cf6ecd))
- add demo ([d0cfb68](https://github.com/spruce-hub/nuxt-modules/commit/d0cfb68cd799b7320fab7e4de9c25e7b79e75be9))
- update config ([a917da3](https://github.com/spruce-hub/nuxt-modules/commit/a917da36631bfa4f90ec688a0bfcc4c39773ebcd))
- add the .nuxt directory to .gitignore ([88a71c6](https://github.com/spruce-hub/nuxt-modules/commit/88a71c6271c6b5b2bece5bd591303e70a244ed54))
- delete the .nuxt directory ([d7f3075](https://github.com/spruce-hub/nuxt-modules/commit/d7f3075e8100e597d6417fb1b3bcd5007a11ad1a))

# [1.0.0](https://github.com/spruce-hub/nuxt-modules/compare/e7c09ae3a09ae8c64476cdec35bedebb349581f1...v1.0.0) (2023-03-28)

### ✨Features

- first commit ([e7c09ae](https://github.com/spruce-hub/nuxt-modules/commit/e7c09ae3a09ae8c64476cdec35bedebb349581f1))

### 🐛Bug Fixes

- **fetch:** param is optional ([2fd4835](https://github.com/spruce-hub/nuxt-modules/commit/2fd483591c2df8f3fa19ce0fe9c5664ac666e1f0))
- **route:** param is optional ([64e590c](https://github.com/spruce-hub/nuxt-modules/commit/64e590cd59b1600332637e4cadcd376937d3fb05))
- **route:** add type annotation ([826bb55](https://github.com/spruce-hub/nuxt-modules/commit/826bb55ece7962fc775afc10005dfedb449f4c62))

### 🛠️Chore

- **cz:** add route scopes ([73a817f](https://github.com/spruce-hub/nuxt-modules/commit/73a817f419db453b780da21da9f013d4d8b53560))
