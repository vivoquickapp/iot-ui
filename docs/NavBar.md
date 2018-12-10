### NavBar导航栏

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  config | 配置项| object | {showMore: true,showClose: true, title: '' } |
| onclose | 关闭事件 | | |
| onmore | 更多事件 | | |

### 示例

``` html 

<import name="NavBar" src="iot-ui/NavBar/index.ux"></import>
<template>
  <div class="box">
    <NavBar
      config="{{navBarConfig}}"
      onclose="handleClose"
      onmore="handleMore"
    ></NavBar>
   
  </div>
</template>

<style>
.box {
  flex-direction: column;
}
</style>

<script>

export default {
  data() {
    return {
      navBarConfig: {
        showMore: true,
        showClose: true,
        title: "这是标题"
      }
    };
  },
  handleClose: function(evt) {
    console.log('close')
   
  },
  handleMore: function(evt) {
    console.log('more')
  },
  onInit() {}
};
</script>


```