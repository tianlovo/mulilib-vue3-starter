<template>
  <div class="playground-container">
    <header class="playground-header">
      <h1>MuliLib Vue3 Playground</h1>
      <p>本地开发测试环境</p>
    </header>

    <main>
      <section class="component-section">
        <!-- TODO 在这里放置组件进行测试 -->
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// 使用此格式导入组件：import { Xxxx } from '../src/xxx';
</script>

<style scoped>
.playground-container {
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.playground-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.playground-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.playground-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.component-section {
  background: white;
}
</style>
