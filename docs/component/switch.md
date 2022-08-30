# Switch 开关

## 用法

### 基础使用

<a-switch v-model="swtichVal" />

<script lang="ts" setup>
import { ref } from "vue";
const swtichVal = ref(false);
</script>

```vue
<template>
  <a-switch v-model="swtichVal" />
</template>
<script lang="ts" setup>
import { ref } from "vue";
const swtichVal = ref(false);
</script>
```

## API

### props

| 名称                 | 类型          | 可选值 | 默认值 | 说明   |
| -------------------- | ------------- | ------ | ------ | ------ |
| modelValue / v-model | string/number | -      | -      | 绑定值 |
| disabled             | boolean       | -      | false  | 禁用   |

### 事件

| 名称   | 说明 | 参数 |
| ------ | ---- | ---- |
| change | -    | -    |
