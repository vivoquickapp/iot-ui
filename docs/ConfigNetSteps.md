### ConfigNetSteps配网步骤

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| title | 设备名称 | string | |
| buttons | 按钮数组 | array | [] |
| onevt-back | 点击返回事件 | | | 
| onevt-click-btn | 点击buttons事件 | | |

属性buttons数组项:


| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| title | 按钮名字 | string | |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
| type | 设置按钮类型，可选值为 primary default dashed或者不设	| string |	default |

### 示例

``` html
<import name="ConfigNetSteps" src="iot-ui/ConfigNetSteps/index.ux"></import>


<template>
    <div>
        <ConfigNetSteps title="设备名称" onevt-back="handleBack" buttons="{{buttons}}" onevt-click-btn="clickBtn">
            <list>
                <list-item for="productList" type="{{$idx}}">
                    <text>{{$item.name}}</text>
                </list-item>
            </list>
        </ConfigNetSteps>
    </div>


</template>

<style lang="less">
    list-item {
        justify-content: center;
    }
</style>

<script>
    let productList = [];
    for (let i = 0; i < 100; i++) {
        productList.push({
            name: '产品' + i
        });
    }


    export default {
        data() {
            return {
                buttons: [
                    {
                        title: '重试',
                        block: true
                    },
                    {
                        title: '取消',
                        type: 'dashed',
                        block: true
                    }
                ],
                productList: productList
            }

        },

        onInit() {

        },
        handleBack(evt) {
            console.log(evt);
        },
        clickBtn(evt) {
            console.log(evt.detail);
        }
    }
</script>

```