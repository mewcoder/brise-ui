<script setup lang="ts">
import { ref, reactive } from "vue";
import { ArrowUpCircleSharp, AddCircle, Alarm, At } from "@vicons/ionicons5";

const inputVal = ref("input");

const rateVal = ref(2);

const switchVal = ref(false);

const radioVal = ref("1");

const formData = reactive({
  name: "",
  age: "",
});

const rules = {
  name: [{ required: true, message: "请输入", trigger: "blur" }],
};

const modalVal = ref(false);
const handleOpen = () => {
  modalVal.value = true;
};
</script>

<template>
  <h1>atoms-ui</h1>
  <hr />

  <h3>button</h3>
  <a-button>按钮</a-button>
  <a-button type="primary">按钮</a-button>
  <a-button type="success">按钮</a-button>
  <a-button type="warning">按钮</a-button>
  <a-button type="danger">按钮</a-button>
  <hr />

  <h3>icon</h3>
  <a-icon size="16"> <AddCircle /> </a-icon>
  <a-icon size="16" color="blue"> <ArrowUpCircleSharp /> </a-icon>
  <a-icon size="16" color="orange"> <Alarm /> </a-icon>
  <a-icon size="16" color="red"> <At /> </a-icon>
  <hr />

  <h3>input</h3>
  <a-input v-model="inputVal" />
  <a-input v-model="inputVal" placeholder="禁用状态" disabled />
  <div>inputVal：{{ inputVal }}</div>
  <hr />

  <h3>rate</h3>
  <a-rate v-model="rateVal" />
  <div>rateVal：{{ rateVal }}</div>
  <hr />

  <h3>switch</h3>
  <a-switch v-model="switchVal"></a-switch>
  <div>switchVal：{{ switchVal }}</div>
  <hr />

  <h3>modal</h3>
  <a-button type="primary" @click="handleOpen">打开弹窗</a-button>
  <a-modal v-model="modalVal" title="模态框">
    <a-form :model="formData" :rules="rules">
      <a-form-item label="姓名" prop="name">
        <a-input v-model="formData.name" />
      </a-form-item>
      <a-form-item label="年龄" prop="age">
        <a-input v-model="formData.age" />
      </a-form-item>
    </a-form>
    <template #footer>
      <a-button type="primary" @click="modalVal = false">确定</a-button>
      <a-button @click="modalVal = false">关闭</a-button>
    </template>
  </a-modal>
  <hr />

  <h3>radio</h3>
  <a-radio-group v-model="radioVal">
    <a-radio label="1">1</a-radio>
    <a-radio label="2">2</a-radio>
  </a-radio-group>

  <div>radioVal：{{ radioVal }}</div>

</template>
