# Button

## 基础用法

<div>   
  <a-button>default</a-button>
  <a-button type="primary">primary</a-button>
  <a-button type="success">success</a-button>
  <a-button type="info">info</a-button>
  <a-button type="warning">warning</a-button>
  <a-button type="danger">danger</a-button>
</div>
<div class="mt-4">   
  <a-button round>default</a-button>
  <a-button type="primary" round>primary</a-button>
  <a-button type="success" round>success</a-button>
  <a-button type="info" round>info</a-button>
  <a-button type="warning" round>warning</a-button>
  <a-button type="danger" round>danger</a-button>
</div>

```vue
<template>
  <div>
    <a-button>default</a-button>
    <a-button type="success">success</a-button>
    <a-button type="info">info</a-button>
    <a-button type="warning">warning</a-button>
    <a-button type="danger">danger</a-button>
  </div>
  <div class="mt-4">
    <a-button round>default</a-button>
    <a-button type="primary" round>primary</a-button>
    <a-button type="success" round>success</a-button>
    <a-button type="info" round>info</a-button>
    <a-button type="warning" round>warning</a-button>
    <a-button type="danger" round>danger</a-button>
  </div>
</template>
```

## 禁用状态

<div>   
  <a-button disabled>default</a-button>
  <a-button type="primary" disabled>primary</a-button>
  <a-button type="success" disabled>success</a-button>
  <a-button type="info" disabled>info</a-button>
  <a-button type="warning" disabled>warning</a-button>
  <a-button type="danger" disabled>danger</a-button>
</div>

```vue
<template>
  <a-button disabled>default</a-button>
  <a-button type="primary" disabled>primary</a-button>
  <a-button type="success" disabled>success</a-button>
  <a-button type="info" disabled>info</a-button>
  <a-button type="warning" disabled>warning</a-button>
  <a-button type="danger" disabled>danger</a-button>
</template>
```

## API

### 属性

| 名称     | 类型    | 可选值                                           | 默认值  | 说明     |
| -------- | ------- | ------------------------------------------------ | ------- | -------- |
| type     | string  | default, primary, success, info, warning, danger | default | 按钮类型 |
| round    | boolean | true/false                                       | false   | 圆角按钮 |
| disabled | boolean | true/false                                       | false   | 禁用状态 |
