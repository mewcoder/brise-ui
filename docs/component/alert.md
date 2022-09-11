# alert

## 基础用法

<a-alert type="info">info alert</a-alert>
<a-alert type="success">success alert</a-alert>
<a-alert type="warning">warning alert</a-alert>
<a-alert type="danger">danger alert</a-alert>

```vue
<template>
  <a-alert type="info">info alert</a-alert>
  <a-alert type="success">success alert</a-alert>
  <a-alert type="warning">warning alert</a-alert>
  <a-alert type="danger">danger alert</a-alert>
</template>
```

## 简单样式

<a-alert type="info" simple>info alert</a-alert>
<a-alert type="success" simple>success alert</a-alert>
<a-alert type="warning" simple>warning alert</a-alert>
<a-alert type="danger" simple>danger alert</a-alert>

```vue
<template>
  <a-alert type="info" simple>info alert</a-alert>
  <a-alert type="success" simple>success alert</a-alert>
  <a-alert type="warning" simple>warning alert</a-alert>
  <a-alert type="danger" simple>danger alert</a-alert>
</template>
```

##  属性

| 名称     | 类型    | 可选值                         | 默认值 | 说明     |
| -------- | ------- | ------------------------------ | ------ | -------- |
| type     | string  | success, info, warning, danger | info   | 类型     |
| simple   | boolean | true/false                     | false  | 简单样式 |
| closable | boolean | true/false                     | true   | 关闭按钮 |
