// src/index.ts
import type { App } from 'vue';

import '@unocss/reset/tailwind-compat.css';
import 'virtual:uno.css';
import '@/assets/styles/index.scss';

// 内部 Pinia 实例
import { createPinia } from 'pinia';
const libPinia = createPinia();

// 插件(库)入口
export default {
  install(app: App) {
    // 把库内部用的 Pinia 注册到宿主 app
    app.use(libPinia);

    // 如果库里有全局组件，也可以在这里注册
    // app.component('MyButton', MyButton)
  },
};
