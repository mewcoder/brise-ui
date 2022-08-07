<template>
  <div
    class="a-form-item"
    :class="[
      {
        'is-required': isRequired,
      },
    ]"
  >
    <label v-if="label" class="a-form-item__label">{{ label }}</label>
    <div class="a-form-item__content">
      <slot></slot>
      <div v-if="validateState === 'error'" class="a-form-item__error">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AsyncValidator from "async-validator";
import { ref, inject, computed } from "vue";
import { formItemProps } from "./api";
const form: any = inject("form", undefined);

let initialValue = "";

const props = defineProps(formItemProps);

const validateState = ref("");
const validateMessage = ref("");

const isRequired = computed(() => {
  let rules = getRules();
  let isRequired = false;
  if (rules && rules.length) {
    rules.every((rule) => {
      if (rule.required) {
        isRequired = true;
      }
    });
  }
  return isRequired;
});

const fieldValue = () => {};

const getRules = () => {
  let formRules = form.rules;
  formRules = formRules ? formRules[props.prop] : [];
  return [].concat(formRules || []);
};

const setRules = () => {
  let rules = getRules();
  if (rules.length) {
    // this.$on("on-form-blur", this.onFieldBlur);
    // this.$on("on-form-change", this.onFieldChange);
  }
};

// 重置数据
const resetField = () => {
  validateState.value = "";
  validateMessage.value = "";

  form.model[props.prop] = initialValue;
};
// 如果没有传入 prop，则无需校验，也就无需缓存
if (props.prop) {
  // this.dispatch("ZForm", "on-form-item-add", this);
  // 设置初始值，以便在重置时恢复默认值
  // initialValue = this.fieldValue;

  setRules();
}

// 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
const getFilteredRule = (trigger) => {
  const rules = getRules();
  return rules.filter(
    (rule) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
  );
};

const validate = (trigger, callback = function () {}) => {
  let rules = this.getFilteredRule(trigger);

  if (!rules || rules.length === 0) {
    return true;
  }

  // 设置状态为校验中
  validateState.value = "validating";

  // 以下为 async-validator 库的调用方法
  let descriptor = {};
  descriptor[this.prop] = rules;
  const validator = new AsyncValidator(descriptor);
  let model = {};
  model[this.prop] = this.fieldValue;
  validator.validate(model, { firstFields: true }, (errors) => {
    validateState.value = !errors ? "success" : "error";
    validateMessage.value = errors ? errors[0].message : "";
    callback(validateMessage.value);
  });
};
</script>

<script>
export default {
  name: "AFormItem",
};
</script>
