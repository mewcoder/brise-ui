# Icon 图标

推荐使用 [xicons](https://www.xicons.org/) 作为图标库。

```bash
pnpm install @vicons/ionicons5
```

## 用法

### 基础用法

<script setup lang="ts">
import { AddCircle, ArrowUpCircleSharp, Alarm, At } from "@vicons/ionicons5";
</script>

<a-icon color="#3b82f6"> <AddCircle /> </a-icon>
<a-icon color="#22c55e"> <ArrowUpCircleSharp /> </a-icon>
<a-icon color="#f97316"> <Alarm /> </a-icon>
<a-icon color="#ef4444"> <At /> </a-icon>

```vue
<template>
  <a-icon color="#3b82f6"> <AddCircle /> </a-icon>
  <a-icon color="#22c55e"> <ArrowUpCircleSharp /> </a-icon>
  <a-icon color="#f97316"> <Alarm /> </a-icon>
  <a-icon color="#ef4444"> <At /> </a-icon>
</template>
<script setup lang="ts">
import { AddCircle, ArrowUpCircleSharp, Alarm, At } from '@vicons/ionicons5';
</script>
```

## API

### 属性

| 名称  | 类型   | 可选值 | 默认值 | 说明     |
| ----- | ------ | ------ | ------ | -------- |
| color | string | -      | -      | 图标颜色 |
