### NavBar导航栏

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  config | 配置项| object | {showMore: true,showClose: true, title: '' } |
| onevt-close | 关闭事件 | | |
| onevt-more | 更多事件 | | |

### 示例

``` html 

<import name="NavBar" src="iot-ui/NavBar/index.ux"></import>
<template>
    <div class="box">
        <NavBar config="{{navBarConfig}}" onevt-close="handleClose" onevt-more="handleMore"></NavBar>
        <div class="c1">
            <text>{{content}}</text>
        </div>
    </div>
</template>

<style>
    .box {
        flex-direction: column;
    }

    .c1 {
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }

    .c1 text {
        padding: 20px;
    }
</style>

<script>
    let i = 0;

    export default {
        data() {

            return {
                content: 'hello world',

                navBarConfig: {
                    showMore: true,
                    showClose: true,
                    title: '这是标题',


                }
            }
        },
        handleClose: function (evt) {
            i++;

            this.content = evt.detail.name + "---" + i;
        },
        handleMore: function (evt) {
            i++;
            this.content = evt.detail.name + "---" + i;
        },
        onInit() {

        },

    }
</script>
```