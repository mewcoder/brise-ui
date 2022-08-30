# Modal 模态框

## 用法

### 基础使用

  <a-button type="primary" @click="handleOpen">打开弹窗</a-button>
  <a-modal v-model="modal" title="模态框">
    <a-form :model="formData" :rules="rules">
      <a-form-item label="姓名" prop="name">
        <a-input v-model="formData.name" />
      </a-form-item>
      <a-form-item label="年龄" prop="age">
        <a-input v-model="formData.age" />
      </a-form-item>
    </a-form>
    <template #footer>
      <a-button type="primary">按钮</a-button>
      <a-button>按钮</a-button>
    </template>
  </a-modal>
  
```vue
<template>
  <a-button type="primary" @click="handleOpen">打开弹窗</a-button>
  <a-modal v-model="modal" title="模态框">
    <a-form :model="formData" :rules="rules">
      <a-form-item label="姓名" prop="name">
        <a-input v-model="formData.name" />
      </a-form-item>
      <a-form-item label="年龄" prop="age">
        <a-input v-model="formData.age" />
      </a-form-item>
    </a-form>
    <template #footer>
      <a-button type="primary">按钮</a-button>
      <a-button>按钮</a-button>
    </template>
  </a-modal>
</template>
```

<script lang="ts" setup>
import { ref, reactive } from "vue";
const formData = reactive({
  name: "",
  age: "",
});
const modal = ref(false);
const handleOpen = () => {
  modal.value = true;
};
</script>

## API

### props

| 名称                 | 类型          | 可选值 | 默认值 | 说明   |
| -------------------- | ------------- | ------ | ------ | ------ |
| modelValue / v-model | boolean | -      | -      | 绑定值 |

