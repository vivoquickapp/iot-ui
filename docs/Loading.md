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
        <!-- <text @click="fn" class="t1">点击切换Loading显示</text>
        <text>Loading显示:{{show}}</text> -->
        <Loading size="default" if="{{show}}"></Loading>
    </div>
</template>

<style lang="less">
    .box {
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }

    .t1 {
        border: 1px solid blue;
        padding: 20px;
        margin: 10px;
        border-radius: 10px;
    }
</style>

<script>
    import prompt from '@system.prompt'

    export default {

        onInit() {

        },
        data() {

            return {
                show: true

            }
        },
        fn() {
            this.show = !this.show;
        }
    }
</script>

```