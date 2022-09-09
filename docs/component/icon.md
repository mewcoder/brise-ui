# Icon 图标

推荐使用 [xicons](https://www.xicons.org/) 作为图标库

```sh
pnpm install @vicons/ionicons5
```

## 基础用法

<a-icon color="#4f46e5"> <ArrowUpCircle /> </a-icon>
<a-icon color="#22c55e"> <ArrowDownCircle /> </a-icon>
<a-icon color="#f97316"> <ArrowBackCircle /> </a-icon>
<a-icon color="#ef4444"> <ArrowForwardCircle /> </a-icon>

```vue
<template>
  <a-icon color="#4f46e5"> <ArrowUpCircle /> </a-icon>
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
