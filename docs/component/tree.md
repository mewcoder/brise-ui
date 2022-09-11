# Tree

## 基础使用

<a-tree :data="treeVal" show-checkbox></a-tree>

```vue
<template>
  <a-tree :data="treeVal" show-checkbox></a-tree>
</template>
```

## 属性

| 名称                 | 类型          | 可选值 | 默认值 | 说明   |
| -------------------- | ------------- | ------ | ------ | ------ |
| modelValue / v-model | string/number | -      | -      | 绑定值 |
| disabled             | boolean       | -      | false  | 禁用   |

## 事件

| 名称   | 说明 | 参数 |
| ------ | ---- | ---- |
| change | -    | -    |

<script lang="ts" setup>
import { reactive } from "vue";
const treeVal = reactive([
  {
    title: 'parent 1',
    expand: true,
    checked: false,
    children: [
      {
        title: 'parent 1-1',
        expand: true,
        checked: false,
        children: [
          {
            title: 'leaf 1-1-1',
            checked: false
          },
          {
            title: 'leaf 1-1-2',
            checked: false
          }
        ]
      },
      {
        title: 'parent 1-2',
        checked: false,
        children: [
          {
            title: 'leaf 1-2-1',
            checked: false
          },
          {
            title: 'leaf 1-2-1',
            checked: false
          }
        ]
      }
    ]
  }
]);
</script>
