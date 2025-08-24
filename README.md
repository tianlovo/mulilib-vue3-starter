# MuliMuli Vue3 Library Starter

一个基于 Vue 3 + Vite + TypeScript 的现代化前端项目启动模板，集成了 UnoCSS、Pinia 等先进工具链。

## ✨ 特性

- 🚀 **Vue 3.5** - 最新版本的 Vue 3 框架
- 📦 **Vite 7** - 极速的前端构建工具
- 🎨 **UnoCSS** - 原子化 CSS 引擎
- 🗃️ **Pinia** - 新一代 Vue 状态管理库
- 📝 **TypeScript** - 完整的 TypeScript 支持
- 🎯 **ESLint + Prettier** - 代码质量和格式化工具
- 💅 **Sass/SCSS** - CSS 预处理器支持
- 🏷️ **Attributify Mode** - UnoCSS 属性化模式

## 🛠️ 技术栈

- **前端框架**: Vue 3.5+
- **构建工具**: Vite 7.0+
- **开发语言**: TypeScript 5.8+
- **样式方案**: UnoCSS + Sass
- **状态管理**: Pinia 3.0+
- **代码规范**: ESLint 9 + Prettier 3.6
- **Node 版本**: ^20.19.0 || >=22.12.0

------

## 使用说明

若本库是带样式的，那么目标项目需要在入口文件引入本库的样式文件
```ts
import 'muli-lib/dist/style.css'
```

### 做为自己的库需要修改的地方

1. `package.json`

   其中的`mulilib-vue3-starter`和`muli-lib`

   ```json
   {
     "name": "mulilib-vue3-starter",
     "main": "./build/dist/muli-lib.umd.js",
     "module": "./build/dist/muli-lib.es.js",
     "types": "./build/dist/index.d.ts",
     "exports": {
       ".": {
         "import": "./build/dist/muli-lib.es.js",
         "require": "./build/dist/muli-lib.umd.js"
       },
       "./dist/style.css": "./build/dist/index.css"
     },
   }
   ```

2. ` vite.config.ts `

   其中的`muli-lib`

   ```ts
   {
       build: {
       lib: {
         entry: path.resolve(__dirname, 'src/index.ts'),
         name: 'muli-lib',
         formats: ['es', 'umd'],
         fileName: (format) => `muli-lib.${format}.js`
       },
     },
   }
   ```

3. `playground/index.html`

   其中的`MuliLib`

   ```html
   <title>MuliLib Vue3 Playground</title>
   ```

4. `playground/App.vue`

   其中的`MuliLib`

   ```vue
   <h1>MuliLib Vue3 Playground</h1>

------

### TypeScript 支持

TypeScript 默认无法处理 `.vue` 导入的类型信息，我们使用 `vue-tsc` 替代 `tsc` 进行类型检查。在编辑器中需要 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 来让 TypeScript 语言服务识别 `.vue` 类型。

## ⚙️ 配置说明

详细配置请参考 [Vite 配置文档](https://vite.dev/config/) 和 [UnoCSS 配置文档](https://unocss.dev/)。

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发环境

启动开发服务器，支持热重载：

```bash
pnpm dev
```

### 生产构建

类型检查、编译和压缩生产版本：

```bash
pnpm build
```

### 代码检查

使用 ESLint 进行代码检查和自动修复：

```bash
pnpm lint
```

### 代码格式化

使用 Prettier 格式化代码：

```bash
pnpm format
```

### 发布至私有npm仓库

发布至私有npm仓库命令：

```bash
pnpm publish --registry http://192.168.76.128:4873/
```

## 📝 许可证

本项目采用 [许可证](LICENSE.md) - 详见 LICENSE.md 文件。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。
