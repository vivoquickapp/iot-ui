### ActionSheet对话框

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  datasource | 选项数组 ,选项需要有name属性| array | [] |
| height | ActionSheet对话框高度 | number | 600 |
| visible | ActionSheet对话框是否显示 | boolean | false |
| onevt-choose | 选择事件 | | |
| onevt-cancel | 取消事件 | | |

### 示例

``` html

<import name="ActionSheet" src="iot-ui/ActionSheet/index.ux"></import>
<template>
  <div>
    <div class="box">
      <text @click="handleClick" class="btn-text"> 点击显示ActionSheet </text>
      <text class="choosed-value"> 选择的值:{{ choosedValue }} </text>
    </div>
    <ActionSheet visible="{{visible}}" datasource="{{datasource}}" height="{{height}}" onevt-choose="handleChoose" onevt-cancel="handleCancel"></ActionSheet>
  </div>
</template>

<style>
  .box {
    flex-direction: column;
    justify-content: center;
    padding: 40px;
  }

  text {
    font-size: 40px;
  }

  .btn-text {
    border-radius: 10px;
    background-color: #409EFF;
    padding: 40px;
    color: #fff;
  }

  .choosed-value {
    margin-top: 40px;
  }
</style>

<script>
  let arr = [];
  for (let i = 0; i < 200; i++) {
    arr.push({
      name: "" + i
    });
  }

  export default {
    private: {
      visible: false,
      //height可以不传,默认值900
      height: 900,
      datasource: arr,
      choosedValue: ""
    },
    onInit() { },
    handleChoose(evt) {
      console.log(evt.detail);
      this.visible = false; //选中之后 this.visible 需要设置为false
      this.choosedValue = evt.detail.item.name;
    },
    handleCancel(evt) {
      this.visible = false; //取消选择
      console.log("取消选择 ");
    },
    handleClick() {
      this.visible = true;
    }
  };
</script>

```