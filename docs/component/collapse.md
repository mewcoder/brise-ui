# Collapse 折叠面板

## 基础使用

 <a-collapse v-model="collapseVal">
    <a-collapse-item title="一致性 Consistency" name="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    </a-collapse-item>
    <a-collapse-item title="反馈 Feedback" name="2">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    </a-collapse-item>
  </a-collapse>

```vue
<template>
  <a-collapse v-model="collapseVal">
    <a-collapse-item title="一致性 Consistency" name="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    </a-collapse-item>
    <a-collapse-item title="反馈 Feedback" name="2">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    </a-collapse-item>
  </a-collapse>
</template>
```

## collapse 属性

| 名称                 | 类型  | 可选值 | 默认值 | 说明   |
| -------------------- | ----- | ------ | ------ | ------ |
| modelValue / v-model | array | -      | -      | 绑定值 |

## collapse-item 属性

| 名称  | 类型          | 可选值 | 默认值 | 说明   |
| ----- | ------------- | ------ | ------ | ------ |
| name  | string/number | -      | -      | 绑定值 |
| title | string        | -      | false  | 标题   |


<script lang="ts" setup>
import { ref } from "vue";
const collapseVal = ref(['1']);
</script>
