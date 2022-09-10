# Radio 单选框

### 基础使用

  <a-radio-group v-model="radioVal1">
    <a-radio label="one">one</a-radio>
    <a-radio label="two">two</a-radio>
  </a-radio-group>

```vue
<template>
  <a-radio-group v-model="radioVal">
    <a-radio label="one">one</a-radio>
    <a-radio label="two">two</a-radio>
  </a-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const radioVal = ref('two');
</script>
```

### 禁用状态

单项禁用：
<a-radio-group v-model="radioVal2">
<a-radio label="one">one</a-radio>
<a-radio label="two" disabled>two</a-radio>
</a-radio-group>

```vue
<template>
  <a-radio-group v-model="radioVal">
    <a-radio label="one">one</a-radio>
    <a-radio label="two" disabled>two</a-radio>
  </a-radio-group>
</template>
```

全部禁用：
<a-radio-group v-model="radioVal3" disabled>
<a-radio label="one">one</a-radio>
<a-radio label="two" >two</a-radio>
</a-radio-group>

```vue
<template>
  <a-radio-group v-model="radioVal" disabled>
    <a-radio label="one">one</a-radio>
    <a-radio label="two">two</a-radio>
  </a-radio-group>
</template>
```

## radio-group 属性

| 名称                 | 类型                  | 可选值 | 默认值 | 说明   |
| -------------------- | --------------------- | ------ | ------ | ------ |
| modelValue / v-model | string/number/boolean | -      | -      | 绑定值 |
| disabled             | boolean               | -      | false  | 禁用   |

## radio-group 事件

| 名称   | 说明                   | 参数                     |
| ------ | ---------------------- | ------------------------ |
| change | 绑定值变化时触发的事件 | 选中的 radio 的 label 值 |

## radio 属性

| 名称     | 类型                  | 可选值 | 默认值 | 说明   |
| -------- | --------------------- | ------ | ------ | ------ |
| label    | string/number/boolean | -      | -      | 绑定值 |
| disabled | boolean               | -      | false  | 禁用   |

<script lang="ts" setup>
import { ref } from "vue";
const radioVal1 = ref('two');
const radioVal2 = ref('one');
const radioVal3 = ref('one');
</script>
