# Rate 评分

## 基础使用

<a-breadcrumb :value="bc" />

## 属性

| 名称                 | 类型    | 可选值 | 默认值 | 说明   |
| -------------------- | ------- | ------ | ------ | ------ |
| modelValue / v-model | number  | -      | 0      | 绑定值 |
| disabled             | boolean | -      | false  | 禁用   |

## 事件

| 名称   | 说明           | 参数           |
| ------ | -------------- | -------------- |
| change | 分数改变时触发 | (value:number) |

<script lang="ts" setup>
const bc = ['home','manage','promotion'];
</script>
