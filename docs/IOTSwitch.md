### IOTSwitch开关
属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  checked | 指定当前是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| name | 可不设置,触发的事件会携带回设置的name值 | any | undefined |
| onevt-change | 事件 | | |

### 示例
``` html

<import name="IOTSwitch" src="iot-ui/IOTSwitch/index.ux"></import>
<template>
  <div class="box">
    <IOTSwitch checked="{{checked}}" disabled="{{disabled}}" onevt-change="handleChange" name="张三"></IOTSwitch>
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
    click() {
      this.disabled = !this.disabled;
    },
    handleChange(evt) {
      console.info(`父组件：事件响应: `, evt.type, evt.detail.name);
      this.checked = evt.detail.checked;

      this.i++;
    },
    data() {
      return {
        i: 0,
        checked: true,
        disabled: false
      };
    }
  };
</script>

```