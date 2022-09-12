# Breadcrumb 面包屑

## 基础使用

<a-breadcrumb :value="bc" />

```vue
<template>
  <a-breadcrumb :value="bc" />
  <script lang="ts" setup>
    const bc = ['home', 'manage', 'promotion'];
  </script>
</template>
```

## 属性

| 名称  | 类型     | 可选值 | 默认值 | 说明   |
| ----- | -------- | ------ | ------ | ------ |
| value | string[] | -      | -      | 绑定值 |

<script lang="ts" setup>
const bc = ['home','manage','promotion'];
</script>
