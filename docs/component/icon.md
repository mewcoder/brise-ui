# Icon 图标

推荐使用 xicons 作为图标库。

```bash
pnpm install @vicons/ionicons5
```

## 使用

<script setup lang="ts">
import { ArrowUpCircleSharp, AddCircle } from "@vicons/ionicons5";
</script>

<a-icon size="20" color="red"> <ArrowUpCircleSharp /> </a-icon>
<a-icon size="20"> <AddCircle /> </a-icon>

```vue
<template>
  <a-icon size="20" color="red"> <ArrowUpCircleSharp /> </a-icon>
  <a-icon size="20"> <AddCircle /> </a-icon>
</template>
<script setup lang="ts">
import { ArrowUpCircleSharp, AddCircle } from "@vicons/ionicons5";
</script>
```

## API

### props

| 名称  | 类型          | 可选值 | 默认值 | 说明     |
| ----- | ------------- | ------ | ------ | -------- |
| size  | string/number | -      | 16     | 大小     |
| color | string        | -      | -      | 图标颜色 |
