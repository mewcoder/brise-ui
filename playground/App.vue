<script setup lang="ts">
import { ref, reactive } from "vue";
import { ArrowUpCircleSharp, AddCircle } from "@vicons/ionicons5";
const str = ref("11111111111");
const rate = ref(2);
const modal = ref(false);
const formData = reactive({
  name: "",
  age: "",
});
const switchVal = ref(false);

const rules = {
  name: [{ required: true, message: "请输入", trigger: "blur" }],
};

const handleOpen = () => {
  modal.value = true;
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
  <a-input v-model="str" />
  <a-input v-model="str" placeholder="禁用状态" disabled />
  <div>val：{{ str }}</div>
  <hr />

  <h3>rate</h3>
  <a-rate v-model="rate" />
  <div>rate：{{ rate }}</div>
  <hr />

  <h3>modal</h3>
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
  <hr />

  <h3>switch</h3>
  <a-switch v-model="switchVal"></a-switch>
  <div>switchVal：{{ switchVal }}</div>
  <hr />

  <h3>radio</h3>
  <a-radio v-model="switchVal"></a-radio>
  <div>switchVal：{{ switchVal }}</div>
</template>

<style scoped></style>
