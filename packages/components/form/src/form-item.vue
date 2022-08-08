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
import { ref, provide, inject, computed, onMounted, onUnmounted } from "vue";
import { formItemProps } from "./api";

const props = defineProps(formItemProps);

const form: any = inject("form", undefined);

let initialValue = "";
const validateState = ref("");
const validateMessage = ref("");

const fieldValue = computed(() => {
  if (!form.model || !props.prop) return;
  console.log(form.model[props.prop]);
  return form.model[props.prop];
});

const _rules = computed(() => {
  let formRules = form.rules;
  console.log(formRules);
  formRules = formRules && props.prop ? formRules[props.prop] : [];
  return [].concat(formRules || []);
});

const isRequired = computed(() => {
  let rules = _rules.value;
  let isRequired = false;
  if (rules && rules.length) {
    rules.every((rule: any) => {
      if (rule.required) {
        isRequired = true;
      }
    });
  }
  return isRequired;
});

// 过滤出符合要求的 rule 规则
const getFilteredRule = (trigger: string) => {
  return _rules.value.filter(
    (rule: any) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
  );
};

const validate = (trigger: string, callback: any) => {
  let rules = getFilteredRule(trigger);

  if (!rules || rules.length === 0 || !props.prop) {
    return true;
  }

  validateState.value = "validating";
  const validator = new AsyncValidator({
    [props.prop]: rules,
  });

  validator.validate(
    { [props.prop]: fieldValue.value },
    { firstFields: true },
    (errors) => {
      validateState.value = !errors ? "success" : "error";
      validateMessage.value =
        errors && errors[0] && errors[0].message ? errors[0].message : "";
      callback && callback(validateMessage.value);
    }
  );
};

const clearValidate = () => {
  validateState.value = "";
  validateMessage.value = "";
};

// 重置数据
const resetField = () => {
  if (!form.model || !props.prop) return;
  form.model[props.prop] = initialValue;
  clearValidate();
};

const context = {
  resetField,
  validate,
};

onMounted(() => {
  // 如果没有传入 prop，则无需校验，也就无需缓存
  if (props.prop) {
    form.addField(context);
    initialValue = fieldValue.value;
  }
});

onUnmounted(() => {
  form.removeField(context);
});

provide("form-item", context);
</script>

<script lang="ts">
export default {
  name: "AFormItem",
};
</script>
