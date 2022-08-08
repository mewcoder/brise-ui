<script setup lang="ts">
import { ref, reactive } from "vue";
import { ArrowUpCircleSharp, AddCircle } from "@vicons/ionicons5";
const str = ref("11111111111");
const formData = reactive({
  name: "",
  age: "",
});

const rules = {
  name: [{ required: true, message: "请输入", trigger: "blur" }],
};
</script>

<template>
  <h1>Storm Vue</h1>
  <!-- 
  <h3>button</h3>
  <a-button>按钮</a-button>
  <a-button type="primary">按钮</a-button>
  <a-button type="success">按钮</a-button>
  <a-button type="warning">按钮</a-button>
  <a-button type="danger">按钮</a-button>

  <h3>icon</h3>
  <a-icon size="16" color="red"> <ArrowUpCircleSharp /> </a-icon>
  <a-icon size="16"> <AddCircle /> </a-icon> -->

  <h3>input</h3>
  <a-input v-model="str" class="w-200px" />
  <a-input v-model="str" disabled class="w-200px" />
  <div>input:{{ str }}</div>

  <h3>form</h3>
  <a-form :model="formData" :rules="rules">
    <a-form-item label="姓名" prop="name">
      <a-input v-model="formData.name" class="w-200px" />
    </a-form-item>
    <a-form-item label="年龄" prop="age">
      <a-input v-model="formData.age" class="w-200px" />
    </a-form-item>
  </a-form>
</template>

<style scoped></style>
