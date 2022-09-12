# Rate 评分

## 基础使用

  <a-tabs v-model="activeName">
    <a-tab-pane label="use" name="first">User</a-tab-pane>
    <a-tab-pane label="config" name="second">Config</a-tab-pane>
    <a-tab-pane label="role" name="third">Role</a-tab-pane>
    <a-tab-pane label="task" name="fourth">Task</a-tab-pane>
  </a-tabs>

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

import { ref } from 'vue'

const activeName = ref('first')

</script>
