<template>
  <form class="a-form">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
import { reactive, provide, ref, toRefs } from "vue";
import { formProps } from "./api";
const props = defineProps(formProps);

const fields = ref<any[]>([]);

const addField = (field: any) => {
  if (field) {
    fields.value.push(field);
  }
};

const removeField = (field: any) => {
  if (field.prop) {
    fields.value.splice(fields.value.indexOf(field), 1);
  }
};

const resetFields = () => {
  fields.value.forEach((field) => {
    field.resetField();
  });
};
// 校验
const validate = (callback: any) => {
  return new Promise((resolve) => {
    let valid = true;
    let count = 0;
    fields.value.forEach((field: any) => {
      field.validate("", (errors: any) => {
        if (errors) {
          valid = false;
        }
        if (++count === fields.value.length) {
          // 全部完成
          resolve(valid);
          if (typeof callback === "function") {
            callback(valid);
          }
        }
      });
    });
  });
};

provide(
  "form",
  reactive({
    ...toRefs(props),
    addField,
    removeField,
    resetFields,
    validate,
  })
);
</script>

<script lang="ts">
export default {
  name: "AForm",
};
</script>
