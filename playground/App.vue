<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import { ArrowUpCircleSharp, AddCircle, Alarm, At } from '@vicons/ionicons5';

const inputVal = ref('atomu vue');

const rateVal = ref(2);

const switchVal = ref(false);

const radioVal = ref('1');

const checkboxVal = ref([]);

const collapseVal = ref(['1']);

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

const formData = reactive({
  name: '',
  age: ''
});

const rules = {
  name: [{ required: true, message: '请输入', trigger: 'blur' }]
};

const modalVal = ref(false);
const handleOpen = () => {
  modalVal.value = true;
};

const radioValue = ref('default');

let selectedValue = 'default';
const changeTheme = (color: string) => {
  document.documentElement.classList.remove(selectedValue);
  selectedValue = color;
  document.documentElement.classList.add(color);
};
</script>

<template>
  <div class="flex items-center">
    <h2>atomu-vue</h2>
    <span class="ml-4 text-sm">切换主题：</span>
    <a-radio-group v-model="radioValue" @change="changeTheme">
      <a-radio label="default">default</a-radio>
      <a-radio label="green">green</a-radio>
    </a-radio-group>
  </div>
  <hr />

  <h3>button</h3>
  <div class="flex">
    <a-button>按钮</a-button>
    <a-button type="primary">
      <a-icon size="10"> <AddCircle /> </a-icon>按钮
    </a-button>
    <a-button type="info">按钮</a-button>
    <a-button type="success">按钮</a-button>
    <a-button type="warning">按钮</a-button>
    <a-button type="danger" disabled>按钮</a-button>
  </div>

  <hr />

  <h3>icon</h3>
  <a-icon> <AddCircle /> </a-icon>
  <a-icon color="green"> <ArrowUpCircleSharp /> </a-icon>
  <a-icon color="orange"> <Alarm /> </a-icon>
  <a-icon color="red"> <At /> </a-icon>
  <hr />

  <h3>input</h3>
  <a-input v-model="inputVal" />
  <a-input v-model="inputVal" placeholder="禁用状态" disabled />
  <div class="mt-2">inputVal：{{ inputVal }}</div>
  <hr />

  <h3>rate</h3>
  <a-rate v-model="rateVal" />
  <div class="mt-2">rateVal：{{ rateVal }}</div>
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
    <a-radio label="3" disabled>3</a-radio>
  </a-radio-group>
  <div>radioVal：{{ radioVal }}</div>
  <hr />

  <h3>checkbox</h3>
  <a-checkbox-group v-model="checkboxVal">
    <a-checkbox label="1">1</a-checkbox>
    <a-checkbox label="2">2</a-checkbox>
  </a-checkbox-group>
  <div>checkboxVal{{ checkboxVal }}</div>
  <hr />

  <h3>collapse</h3>
  <a-collapse v-model="collapseVal">
    <a-collapse-item title="一致性 Consistency" name="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    </a-collapse-item>
    <a-collapse-item title="反馈 Feedback" name="2">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    </a-collapse-item>
    <a-collapse-item title="可控 Controllability" name="3">
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </a-collapse-item>
  </a-collapse>
  <div>collapseVal：{{ collapseVal }}</div>
  <hr />

  <h3>tree</h3>
  <a-tree :data="treeVal" show-checkbox></a-tree>
  <hr />

  <h3>dropdown</h3>
  <a-dropdown>
    <template v-for="item in 5">
      <a-dropdown-item>{{ item }}</a-dropdown-item>
    </template>
  </a-dropdown>
  <hr />
</template>
