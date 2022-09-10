# checkbox 单选框

### 基础使用

  <a-checkbox-group v-model="checkboxVal1">
    <a-checkbox label="one">one</a-checkbox>
    <a-checkbox label="two">two</a-checkbox>
  </a-checkbox-group>

```vue
<template>
  <a-checkbox-group v-model="checkboxVal">
    <a-checkbox label="one">one</a-checkbox>
    <a-checkbox label="two">two</a-checkbox>
  </a-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const checkboxVal = ref(['two']);
</script>
```

### 禁用状态

单项禁用：
<a-checkbox-group v-model="checkboxVal2">
<a-checkbox label="one">one</a-checkbox>
<a-checkbox label="two" disabled>two</a-checkbox>
</a-checkbox-group>

```vue
<template>
  <a-checkbox-group v-model="checkboxVal">
    <a-checkbox label="one">one</a-checkbox>
    <a-checkbox label="two" disabled>two</a-checkbox>
  </a-checkbox-group>
</template>
```

全部禁用：
<a-checkbox-group v-model="checkboxVal3" disabled>
<a-checkbox label="one">one</a-checkbox>
<a-checkbox label="two" >two</a-checkbox>
</a-checkbox-group>

```vue
<template>
  <a-checkbox-group v-model="checkboxVal" disabled>
    <a-checkbox label="one">one</a-checkbox>
    <a-checkbox label="two">two</a-checkbox>
  </a-checkbox-group>
</template>
```

## checkbox-group 属性

| 名称                 | 类型                  | 可选值 | 默认值 | 说明   |
| -------------------- | --------------------- | ------ | ------ | ------ |
| modelValue / v-model | string/number/boolean | -      | -      | 绑定值 |
| disabled             | boolean               | -      | false  | 禁用   |

## checkbox-group 事件

| 名称   | 说明                   | 参数                        |
| ------ | ---------------------- | --------------------------- |
| change | 绑定值变化时触发的事件 | 选中的 checkbox 的 label 值 |

## checkbox 属性

| 名称     | 类型                  | 可选值 | 默认值 | 说明   |
| -------- | --------------------- | ------ | ------ | ------ |
| label    | string/number/boolean | -      | -      | 绑定值 |
| disabled | boolean               | -      | false  | 禁用   |

<script lang="ts" setup>
import { ref } from "vue";
const checkboxVal1 = ref(['two']);
const checkboxVal2 = ref(['one']);
const checkboxVal3 = ref(['one']);
</script>
