# Form 表单

## 基础用法

  <a-form :model="formData" :rules="rules">
    <a-form-item label="名称" prop="name">
      <a-input v-model="formData.name" />
    </a-form-item>
    <a-form-item label="资源" prop="res">
      <a-radio-group v-model="formData.resource">
        <a-radio label="online">线上</a-radio>
        <a-radio label="offline">线下</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="分类" prop="class">
      <a-checkbox-group v-model="formData.class">
        <a-checkbox label="1">汽车</a-checkbox>
        <a-checkbox label="2">数码</a-checkbox>
        <a-checkbox label="3">汽车</a-checkbox>
        <a-checkbox label="4">美食</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="同步更新" prop="update">
      <a-switch v-model="formData.update" />
    </a-form-item>
  </a-form>
  <div>
    <a-button type="primary">保存</a-button>
    <a-button>取消</a-button>
  </div>

```vue
<template>
  <a-form :model="formData">
    <a-form-item label="名称" prop="name">
      <a-input v-model="formData.name" />
    </a-form-item>
    <a-form-item label="资源" prop="res">
      <a-radio-group v-model="formData.resource">
        <a-radio label="online">线上</a-radio>
        <a-radio label="offline">线下</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="分类" prop="class">
      <a-checkbox-group v-model="formData.class">
        <a-checkbox label="1">汽车</a-checkbox>
        <a-checkbox label="2">数码</a-checkbox>
        <a-checkbox label="3">汽车</a-checkbox>
        <a-checkbox label="4">美食</a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="同步更新" prop="update">
      <a-switch v-model="formData.update" />
    </a-form-item>
  </a-form>
  <div>
    <a-button type="primary">保存</a-button>
    <a-button>取消</a-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const formData = reactive({
  name: '',
  resource: '',
  class: [],
  update: false
});
</script>
```

## form 属性

| 名称  | 类型   | 可选值 | 默认值 | 说明         |
| ----- | ------ | ------ | ------ | ------------ |
| model | object | -      | -      | 表单数据对象 |
| rules | object | -      | -      | 表单验证规则 |

## form-item 属性

| 名称  | 类型   | 可选值 | 默认值 | 说明         |
| ----- | ------ | ------ | ------ | ------------ |
| label | string | -      | -      | 标签文本     |
| prop  | string | -      | false  | model 的键名 |

<script lang="ts" setup>
import { reactive } from "vue";
const formData = reactive({
  name: '',
  resource: '',
  class:[],
  update:false
});

const rules = {
  name: [{ required: true, message: '请输入', trigger: 'blur' }]
};
</script>
