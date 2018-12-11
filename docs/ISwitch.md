### ISwitch开关
属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  checked | 指定当前是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| name | 可不设置,触发的事件会携带回设置的name值 | any | undefined |
| onchange | 事件 | | |

### 注意 ⚠️

```
 1.0.0 版本 IOTSwitch 组件同 ISwitch 组件
 1.0.0 版本事件使用 onevt-change 而非 onchange

```

### 示例
``` html

<import name="ISwitch" src="iot-ui/ISwitch/index.ux"></import>
<template>
  <div class="box">
    <ISwitch checked="{{checked}}" disabled="{{disabled}}" onchange="handleChange" name="张三"></ISwitch>
  </div>
</template>

<style lang="less">
  .box {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
  import prompt from "@system.prompt";

  export default {
    onInit() { },
    data() {
      return {

        checked: true,
        disabled: false
      };
    },
    handleChange(evt) {
      console.info(`父组件：事件响应: `, evt.type, evt.detail.name);
      this.checked = evt.detail.checked;
    }
  };
</script>

```