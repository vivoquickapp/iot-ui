### Btn按钮

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| title | 按钮显示的文字 | string | 空字符串 |
| type | 设置按钮类型，可选值为 primary default dashed或者不设| string | default |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
|  onclick | 点击按钮事件 | | |


### 示例
``` html 

<import name="Btn" src="iot-ui/Btn/index.ux"></import>
<template>
  <div class="box">
    <div class="item">
      <Btn
        type="{{type}}"
        title="{{title}}"
        block="{{block}}"
        onclick="handleClickButton"
      ></Btn>
    </div>
    <div class="item"><Btn type="dashed" title="取消"></Btn></div>
  </div>
</template>

<style lang="less">
.box {
  flex-direction: column;

  justify-content: center;
  align-items: center;
}

.item {
  margin: 10px;
}
</style>

<script>
export default {
  onInit() {},
  data() {
    return {
      block: false, //block属性true,将使按钮适合其父宽度
      type: "default", //dashed, primary
      title: "按钮名字"
    };
  },
  handleClickButton(evt) {
    console.log("点击按钮");
    console.log(evt);
  }
};
</script>


```