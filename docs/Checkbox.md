### Checkbox选项

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  checked | 指定当前是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| name | 可不设置,触发的事件会携带回设置的name值 | any | undefined |
| value |触发的事件会携带回设置的value值 | any | undefined |
| onchange | 改变事件 | | |

### 注意 ⚠️

```
 1.0.0 版本改变事件使用 onevt-change 而非 onchange

```


### 示例

``` html

<import name="CheckBox" src="iot-ui/CheckBox/index.ux"></import>
<template>
  <div class="box">
    <CheckBox name="age" value="{{15}}" checked="{{checked}}" onchange="handleChagne" disabled="{{disabled}}"></CheckBox>
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
  export default {
    onInit() { },
    data() {
      return {
        checked: true,
        disabled: false
      };
    },
    click() {
      this.disabled = !this.disabled;
    },
    handleChagne(evt) {
      console.log("点击CheckBox");
      console.log(evt.detail);
      this.checked = evt.detail.checked;
    }
  };
</script>

``` 