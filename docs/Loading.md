### Loading

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  size | Loading尺寸 可选值为 small large default或者不设 | string | default |


### 示例

``` html

<import name="Loading" src="iot-ui/Loading/index.ux">
</import>
<template>
  <div class="box">
    <Loading size="default" if="{{show}}"></Loading>
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
        show: true
      };
    }
  };
</script>

```