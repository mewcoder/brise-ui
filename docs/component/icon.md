# Icon 图标

推荐使用 [xicons](https://www.xicons.org/) 作为图标库

```sh
pnpm install @vicons/ionicons5
```

## 使用

<a-icon> <ArrowUpCircle /> </a-icon>
<a-icon color="#22c55e"> <ArrowDownCircle /> </a-icon>
<a-icon color="#f97316"> <ArrowBackCircle /> </a-icon>
<a-icon color="#ef4444"> <ArrowForwardCircle /> </a-icon>

```vue
<template>
  <a-icon> <ArrowUpCircle /> </a-icon>
  <a-icon color="#22c55e"> <ArrowDownCircle /> </a-icon>
  <a-icon color="#f97316"> <ArrowBackCircle /> </a-icon>
  <a-icon color="#ef4444"> <ArrowForwardCircle /> </a-icon>
</template>
<script setup lang="ts">
import {
  ArrowUpCircle,
  ArrowDownCircle,
  ArrowBackCircle,
  ArrowForwardCircle
} from '@vicons/ionicons5';
</script>
```

## 属性

| 名称  | 类型   | 可选值 | 默认值 | 说明     |
| ----- | ------ | ------ | ------ | -------- |
| color | string | -      | -      | 图标颜色 |

<script setup lang="ts">
import { ArrowUpCircle, ArrowDownCircle,ArrowBackCircle,ArrowForwardCircle } from "@vicons/ionicons5";
</script>

## 内置图标

组件库内置使用了[hero icons/solid](https://vue-hero-icons.netlify.app)图标，共 226 个图标

### 使用

```vue
<template>
  <XIcon />
</template>
<script setup lang="ts">
import { XIcon } from 'atomu-icons';
</script>
```

### 属性

| 名称 | 类型   | 可选值 | 默认值 | 说明    |
| ---- | ------ | ------ | ------ | ------- |
| size | string | -      | 20     | 单位 px |
