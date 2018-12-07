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
            <div class="c1">
                <text @click="fn">
                    点击显示隐藏ActionSheet
                </text>
            </div>

            <text>
                选择的值:{{choosedValue}}
            </text>

        </div>
   
        <ActionSheet visible="{{visible}}" datasource="{{datasource}}" height="{{height}}" onevt-choose="handleChoose" onevt-cancel="handleCancel"></ActionSheet>
    </div>

</template>

<style>
    .box {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .c1 {
        border: 1px solid blue;
        margin: 20px;
        padding: 20px;
        border-radius: 10px;
    }
</style>

<script>
    let arr = [];
    for (let i = 0; i < 200; i++) {
        arr.push({
            name: 'ss' + i
        });
    }

    export default {
        private: {
            visible: false,
            //height可以不传,默认值600
            height: 500,
            datasource: arr,
            choosedValue: ''

        },
        onInit() {


        },
        handleChoose(evt) {
            console.log(evt.detail);
            this.visible = false;//选中之后 this.visible 需要设置为false
            this.choosedValue = evt.detail.item.name;

        },
        handleCancel(evt) {
            this.visible = false;//取消选择 
            console.log('取消选择 ');
        },
        fn() {

            this.visible = true;

        }

    }
</script>

```