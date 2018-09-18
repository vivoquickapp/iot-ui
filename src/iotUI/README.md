

## 注意
组件使用了less,需要在项目中执行 npm install --save-dev less-loader less

### Button按钮

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| title | 按钮显示的文字 | string | 空字符串 |
| type | 设置按钮类型，可选值为 primary default dashed或者不设| string | default |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
|  onevt-click | 点击按钮事件 | | |



``` html 
<!-- 引入Button组件  -->
<import name="Button" src="../../Button/index.ux"></import>
<template>
    <div class="box">
        <div class="item">
            
            <Button type="{{type}}" title='{{title}}' block="{{block}}" onevt-click="handleClickButton"></Button>

        </div>
        <div class="item">
            <Button type="dashed" title='取消'></Button>
        </div>
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

        onInit() {

        },
        data() {

            return {
                block: false,//block属性true,将使按钮适合其父宽度
                type: 'default',//dashed, primary
                title: '按钮名字'
            }
        },
        handleClickButton(evt) {
            console.log('点击按钮')
            console.log(evt);
        }

    }
</script>
```
