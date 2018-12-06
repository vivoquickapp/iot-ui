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
        <!-- <text onclick="click" class="btn">点击切换disabled值</text>
        <text>disabled值:{{disabled}}</text>
        <text>checked值:{{checked}}</text> -->
        <IOTSwitch checked="{{checked}}" disabled="{{disabled}}" onevt-change="evtTypeHandler" name="张三"></IOTSwitch>
        <!-- <text>改变次数{{i}}</text> -->
    </div>
</template>

<style lang="less">
    .box {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    text {
        height: 100px;
        margin: 30px;
        width: 100%;
        padding: 10px;
    }

    .btn {
        border: 2px solid blue;
        border-radius: 10px;
        width: 600px;

    }
</style>

<script>
    import prompt from '@system.prompt'

    export default {

        onInit() {

        },
        click() {
            this.disabled = !this.disabled;

        },
        evtTypeHandler(evt) {
            console.info(`父组件：事件响应: `, evt.type, evt.detail.name)
            this.checked = evt.detail.checked;

            this.i++;
        },
        data() {

            return {
                i: 0,
                checked: true,
                disabled: false
            }
        }
    }
</script>

```