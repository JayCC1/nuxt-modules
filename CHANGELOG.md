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
