# Button

## 基本使用

<div>   
  <a-button>default</a-button>
  <a-button type="primary">primary</a-button>
  <a-button type="success">success</a-button>
  <a-button type="info">info</a-button>
  <a-button type="warning">warning</a-button>
  <a-button type="danger">danger</a-button>
</div>

```vue
<template>
  <a-button>default</a-button>
  <a-button type="success">success</a-button>
  <a-button type="info">info</a-button>
  <a-button type="warning">warning</a-button>
  <a-button type="danger">danger</a-button>
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

### props

| 名称     | 类型    | 可选值                                           | 默认值  | 说明     |
| -------- | ------- | ------------------------------------------------ | ------- | -------- |
| type     | string  | default, primary, success, info, warning, danger | default | 按钮类型 |
| disabled | boolean | true/false                                       | false   | 禁用状态 |
