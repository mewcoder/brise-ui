# Dialog 对话框

## 用法

### 基础使用

<a-button type="primary" @click="handleOpen">打开弹窗</a-button>
<a-dialog v-model="showDialog" width="600px" title="对话框">
<a-form :model="formData">
<a-form-item label="姓名" prop="name">
<a-input v-model="formData.name" />
</a-form-item>
<a-form-item label="年龄" prop="age">
<a-input v-model="formData.age" />
</a-form-item>
</a-form>
<template #footer>
<a-button @click="showDialog = false">关闭</a-button>
<a-button type="primary" @click="showDialog = false">确定</a-button>
</template>
</a-dialog>

```vue
<template>
  <a-button type="primary" @click="handleOpen">打开弹窗</a-button>
  <a-dialog v-model="showDialog" width="600px" title="对话框">
    <a-form :model="formData">
      <a-form-item label="姓名" prop="name">
        <a-input v-model="formData.name" />
      </a-form-item>
      <a-form-item label="年龄" prop="age">
        <a-input v-model="formData.age" />
      </a-form-item>
    </a-form>
    <template #footer>
      <a-button @click="showDialog = false">关闭</a-button>
      <a-button type="primary" @click="showDialog = false">确定</a-button>
    </template>
  </a-dialog>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
const formData = reactive({
  name: '',
  age: ''
});
const showDialog = ref(false);
const handleOpen = () => {
  showDialog.value = true;
};
</script>
```

## 属性

| 名称                 | 类型    | 可选值 | 默认值 | 说明     |
| -------------------- | ------- | ------ | ------ | -------- |
| modelValue / v-model | boolean | -      | -      | 绑定值   |
| width                | string  | -      | 50vw   | 弹窗宽度 |
| title                | string  | -      | -      | 标题     |
| top                  | string  | -      | 15vh   | 标题     |

## 插槽

| 名称   | 说明         |
| ------ | ------------ |
| -      | Dialog 内容   |
| header | 弹窗宽度     |
| title  | 标题的内容   |
| footer | 操作区的内容 |

<script lang="ts" setup>
import { ref, reactive } from "vue";
const formData = reactive({
  name: "",
  age: "",
});
const showDialog = ref(false);
const handleOpen = () => {
  showDialog.value = true;
};
</script>
