### Modal对话框

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  visible | 对话框是否可见 | boolean | false |
| height | 对话框高度 | number | 600 | 
| title |  对话框标题,可以不设置| string,boolean | undefined |
| buttons | 对话框按钮数组 | array | [] |
| onevt-cancel | 取消事件 | | |
| onevt-click-button | 点击按钮事件 | | |

属性buttons数组项:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| name| 按钮名字 | string | |
| color | 按钮文字颜色 | string | |
| fontSize | 按钮文字尺寸 | number|  |


### 示例

``` html

<import name="Modal" src="iot-ui/Modal/index.ux"></import>
<template>
  <div class="box">
    <text @click="handleShowModal" class="btn-text"> 点击显示Modal </text>
    <Modal visible="{{visible}}" height="{{height}}" onevt-cancel="handleCancel" title="{{title}}" buttons="{{buttons}}" onevt-click-button="handleButtonClick">
      <div class="modal-content">
        <text>这是内容</text>
        <text>这是内容...</text>
      </div>
    </Modal>
  </div>
</template>

<style lang="less">
  .box {
    align-items: center;
    padding: 40px;
  }

  .btn-text {
    border-radius: 10px;
    background-color: #409EFF;
    padding: 40px;
    color: #fff;
    font-size: 40px;
  }

  .modal-content {
    flex-direction: column;
  }
</style>

<script>
  export default {
    private: {
      visible: false,
      //height可以不传,默认值700
      height: 700,
      //title不传,或者传false,undefined是不显示标题
      title: "这是标题",
      buttons: [
        {
          name: "取消",
          //color可以不传
          color: "red",
          //fontSize可以不传
          fontSize: 48
        },
        {
          name: "确认",
          color: "#0000FF",
          fontSize: 48
        }
      ]
    },
    onInit() { },
    handleCancel() {
      //取消
      this.visible = false;
    },

    handleButtonClick(evt) {
      this.visible = false;
      console.log(evt.detail.item); //点击的button;
    },
    handleShowModal() {
      this.visible = true;
      console.log("handleShowModal点击");
    }
  };
</script>


```