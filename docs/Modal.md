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
        <div class="c1">
            <text @click="fn">
                点击显示隐藏Modal
            </text>
        </div>
        <Modal visible="{{visible}}" height="{{height}}" onevt-cancel="handleCancel" title="{{title}}" buttons="{{buttons}}" onevt-click-button="handleButtonClick">
            <div class="c2">
                <text>这是内容</text>
                <text>这是内容...</text>
            </div>

        </Modal>
    </div>

</template>

<style lang="less">
    .box {
        align-items: center;
    }

    .c1 {
        border: 1px solid blue;
        margin: 20px;
        padding: 20px;
        height: 100px;
        border-radius: 10px;
    }

    .c2 {

        flex-direction: column;
    }
</style>

<script>


    export default {
        private: {
            visible: false,
            //height可以不传,默认值600
            height: 500,
            //title不传,或者传false,undefined是不显示标题
            title: "这是标题",
            buttons: [
                {
                    name: '取消',
                    //color可以不传
                    color: 'red',
                    //fontSize可以不传
                    fontSize: 30
                }
                , {
                    name: '确认',
                    color: '#0000FF',
                    fontSize: 30
                }

            ]


        },
        onInit() {


        },
        handleCancel() {
            //取消
            this.visible = false;
        },

        handleButtonClick(evt) {
            this.visible = false;
            console.log(evt.detail.item);//点击的button;


        },
        fn() {

            this.visible = true;
            console.log('fn点击')

        }

    }
</script>


```