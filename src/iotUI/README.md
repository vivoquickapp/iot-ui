

## 注意
+ 组件使用了less,需要在项目中执行 npm install --save-dev less-loader less
+ 如果想修改组件默认样式,请修改组件下的theme.less文件
+ <import name="Button" src="../../Button/index.ux"></import>请引入正确的路径,示例代码的路径与你的路径不同,组件如果在node_modules下,请正确引用到node_modules下

## 组件
+ Button按钮
+ Buttons按钮组
+ Checkbox选项
+ Switch开关
+ Loading
+ Modal对话框
+ ActionSheet对话框
+ NavBar导航栏
+ ConfigNetSteps配网步骤
+ TwoLevelList二级列表


### Button按钮

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| title | 按钮显示的文字 | string | 空字符串 |
| type | 设置按钮类型，可选值为 primary default dashed或者不设| string | default |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
|  onevt-click | 点击按钮事件 | | |


### 示例
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



### Buttons按钮组


属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| config | 按钮组配置信息 | object |  {showText: false,column: 4,iconWidth: 150,textHeight: 50,paddingTop: 20, paddingBottom: 20} |
| data | data是一个数组,数组里的对象是每个按钮的信息,| array | |


属性data数组的项目:

| 属性 | 说明 | 类型  | 默认值 |
| --- | ---- | --- | --- |
| disabled | 按钮失效状态 | boolean | false |
| icons | 数组,数组项对象有图标url,文字name, 文字颜色fontColor等属性,url请设置绝对路径 | array | |
| value | value对应icons数组的索引,例如value值为2,按钮使用的就是icons[2]对象中的图标,文字和颜色| number | |
| click | 按钮绑定的回调函数 | function | |

### 示例

``` html
<import name="buttons" src='../../Buttons/index.ux'></import>
<template>
  <!-- template里只能有一个根节点 -->
  <div class="box">
    <div class="c1">
      <text class="t1" @click="fn">点击切换是否显示button文字</text>
      <text>是否显示button文字:{{ config.showText}}</text>
    </div>
    <buttons config="{{config}}" data="{{data}}"></buttons>
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
    padding: 20px;
  }

  .t1 {
    border-radius: 10px;
    border: 1px solid blue;
    padding: 20px;

  }
</style>

<script>

  export default {

    data() {
      return {
        config: {
          showText: true,
          column: 4,
          iconWidth: 80,
          paddingTop: 20,
          paddingBottom: 20,
          textHeight: 60,

        },
        data: [
          {
            disabled: false,
            icons: [
              {
                //注意: url请使用绝对路径,例如你的 icon.png图片在  <project name>/src/Mydir/icon.png下,那么绝对路径就是/Mydir/icon.png
                url: '/iotUI/demo/testButtons/rec.jpg',
                name: '小o活',
                fontColor: '#ff0000',
              }, {
                url: '/iotUI/demo/testButtons/icon.png',
                name: '小微啊',
                fontColor: '#0000ff',
              }, {
                url: '/iotUI/demo/testButtons/icon.png',
                name: '不可用',
                fontColor: '#ccc',
              }],
            value: 0,
            click: function (item) {

              item['value'] === 1 ? item['value'] = 0 : item['value'] = 1;

              console.log(item)

            }
          }, {
            disabled: false,
            icons: [
              {
                url: '/iotUI/demo/testButtons/rec.jpg',
                name: '小微3',
                fontColor: '#ff0000',
              }, {
                url: '/iotUI/demo/testButtons/icon.png',
                name: '小微',
                fontColor: '#0000ff',
              }, {
                url: '/iotUI/demo/testButtons/icon.png',
                name: '不可用',
                fontColor: '#ccc',
              }],
            value: 0,
            click: function (item) {

              item['value'] === 1 ? item['value'] = 0 : item['value'] = 1;

              console.log(item)

            }
          }, {
            disabled: true,
            icons: [
              {
                url: '/iotUI/demo/testButtons/rec.jpg',
                name: '小微激活',
                fontColor: '#ff0000',
              }, {
                url: '/iotUI/demo/testButtons/icon.png',
                name: '小微',
                fontColor: '#0000ff',
              }, {
                url: '/iotUI/demo/testButtons/icon.png',
                name: '不可用',
                fontColor: '#ccc',
              }, , {
                url: '/iotUI/demo/testButtons/icon.png',
                name: '不可用',
                fontColor: '#ccc',
              }],
            value: 2,
            click: function (item) {

              item['value'] === 1 ? item['value'] = 0 : item['value'] = 1;

              console.log(item)

            }
          }


        ]
      }
    },
    fn() {

      this.config.showText = !this.config.showText;

      this.config = Object.assign({}, this.config);
    }
  }
</script>

``` 


### Checkbox选项

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  checked | 指定当前是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| name | 可不设置,触发的事件会携带回设置的name值 | any | undefined |
| value |触发的事件会携带回设置的value值 | any | undefined |
| onevt-change | 事件 | | |


### 示例

``` html
<import name="CheckBox" src="../../CheckBox/index.ux"></import>
<template>
    <div class="box">
        <text onclick="click" class="btn">点击切换disabled值</text>
        <text>disabled值:{{disabled}}</text>
        <text>checked值:{{checked}}</text>
        <div>
            <CheckBox name="age" value="{{15}}" checked="{{checked}}" onevt-change="handleChagne" disabled="{{disabled}}"></CheckBox>
        </div>


        <text>改变次数{{i}}</text>

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

    export default {

        onInit() {

        },
        data() {

            return {
                i: 0,
                checked: true,
                disabled: false
            }
        },
        click() {

            this.disabled = !this.disabled;

        },
        handleChagne(evt) {
            this.i++;
            console.log('点击CheckBox')
            console.log(evt.detail);
            this.checked = evt.detail.checked;
        }

    }
</script>

``` 




### Switch开关
属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  checked | 指定当前是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| name | 可不设置,触发的事件会携带回设置的name值 | any | undefined |
| onevt-change | 事件 | | |

### 示例
``` html

<import name="Switch" src="../../Switch/index.ux"></import>
<template>
    <div class="box">
        <text onclick="click" class="btn">点击切换disabled值</text>
        <text>disabled值:{{disabled}}</text>
        <text>checked值:{{checked}}</text>
        <Switch checked="{{checked}}" disabled="{{disabled}}" onevt-change="evtTypeHandler" name="张三"></Switch>
        <text>改变次数{{i}}</text>
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


### Loading

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  size | Loading尺寸 可选值为 small large default或者不设 | string | default |


### 示例

``` html

<import name="Loading" src="../../Loading/index.ux">
</import>
<template>
    <div class="box">
        <text @click="fn" class="t1">点击切换Loading显示</text>
        <text>Loading显示:{{show}}</text>
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

<import name="Modal" src="../../Modal/index.ux"></import>
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

<import name="ActionSheet" src="../../ActionSheet/index.ux"></import>
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


### NavBar导航栏

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
|  config | 配置项| object | {showMore: true,showClose: true, title: '' } |
| onevt-close | 关闭事件 | | |
| onevt-more | 更多事件 | | |

### 示例

``` html 

<import name="NavBar" src="../../NavBar/index.ux"></import>
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
<import name="ConfigNetSteps" src="../../ConfigNetSteps/index.ux"></import>


<template>
    <div>
        <ConfigNetSteps title="设备名称" onevt-back="handleBack" buttons="{{buttons}}" onevt-click-btn="clickBtn">
            <div>
                <text>内容..</text>
            </div>
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


### TwoLevelList二级列表

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| datasource | 数据数组 | array | [] |
| title | 标题 | string | |
| showicon | 是否显示图标 | boolean | false | 
| header | 是否显示页眉 | string 或 boolean | false |
| footer | 是否显示页脚 | array 或 boolean | false |
| onevt-back | 返回按钮事件 | | |
| onevt-arrow | 右边箭头按钮事件 | | |

属性footer可以为false或者不设置当footer为数组时,属性footer数组项:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| text | 文字 | string| |
| link | 链接 | string 或boolean 可以不设置,如果是链接请设置 | false|

属性datasource数组项:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| title | 标题 | string| |
| subTitle | 副标题 | string | |
| rightText | 右侧小字 | string | | 
| icon | 如果showicon为true,请设置图标路径地址 | string | |
| isGroup |  | boolean | false|
| header | | string 或boolean | false |
| padding | | boolean | false |
| footer | 同属性footer | | |


### 示例

``` html
<import name="TwoLevelList" src="../../TwoLevelList/index.ux"></import>
<template>
    <TwoLevelList datasource="{{datasource}}" header="{{header}}" footer="{{footer}}" title="这是二级列表大标题" showicon="{{showicon}}" onevt-back="backFn"
        onevt-arrow="clickArrow"></TwoLevelList>
</template>

<style lang="less">
</style>

<script>
    import prompt from '@system.prompt';

    export default {

        onInit() {

        },
        private: {
            showicon: true,
            header: '这是页眉,页眉是针对整个页面做说明,而非针对单项列表,句末加标点.',
            footer: [
                {
                    text: '这是页脚可以有链接,带有link的是链接否则就是文字'
                },

                {
                    link: '/iotUI/demo/home',
                    text: '这是链接home',
                }, {
                    text: '青青子衿'
                },
                {
                    link: '/iotUI/demo/home',
                    text: '悠悠我心',
                }
            ],
            // footer:undefined,
            datasource: [
                {
                    title: '小明',
                    icon: 'https://avatar.csdn.net/A/4/0/3_around_primary.jpg',
                },
                {
                    isGroup: true,
                    header: '这是分组标题',
                },
                {
                    title: '李四',
                    icon: '/iotUI/demo/testButtons/icon.png',
                    subTitle: '副标题',
                    rightText: '右侧小字'

                },
                {
                    isGroup: true,
                    padding: true
                },
                {
                    title: '主标题',
                    subTitle: '副标题',
                    icon: 'https://avatar.csdn.net/A/4/0/3_around_primary.jpg',
                },
                {
                    isGroup: true,
                    footer: [
                        {
                            text: '这是分组脚注,可以有链接,带有link的是链接否则就是文字'
                        },

                        {
                            link: '/iotUI/demo/home',
                            text: '这是链接home',
                        }, {
                            text: '青青子衿'
                        },
                        {
                            link: '/iotUI/demo/home',
                            text: '悠悠我心',
                        }
                    ]
                },
                {
                    title: '主标题',
                    icon: '/iotUI/demo/testButtons/icon.png',
                    rightText: '右侧小字'
                }
            ]

        },
        backFn(evt) {
            console.log('back')
            prompt.showToast({
                message: '点击了back'
            })
        },
        clickArrow: function (evt) {
            console.log(evt.detail.item);
            prompt.showToast({
                message: evt.detail.item.title
            })
        }

    }
</script>

```

