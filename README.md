## 使用iot-ui组件库方法
* 首先需要先执行npm install --save-dev less-loader less
* 项目manifest.json文件config.designWidth需要设置成1080,组件库是按照设计宽度1080开发的
* 方式一 下载iot-ui组件库,解压缩得到文件夹iot-ui,将iot-ui文件夹放到项目src文件夹下,使用相对路径引用组件.例如引用Btn组件:

``` html
<import name="Btn" src="../iot-ui/Btn/index.ux"></import>
```
* 方式二 如果使用npm安装iot-ui组件,iot-ui组件将下载到node_modules文件夹下,需要使用相对路径引用node_modules文件夹下的iot-ui组件.例如引用Btn组件:
``` html
<import name="Btn" src="../../node_modules/iot-ui/Btn/index.ux"></import>
```
* 如果需要修改iot-ui组件库样式,修改iot-ui组件库文件夹下theme.less文件,或者每个组件使用的less文件

## 运行组件库demo方法

1. 下载iot-ui组件库文件并且解压缩
2. cd到解压缩的iot-ui组件库文件夹
3. npm install 安装依赖
4. npm run build 打包
5. npm run watch 扫描二维码安装rpk


## 目录结构

``` html
├── ActionSheet
│   ├── ActionSheet.less
│   └── index.ux
├── Checkbox
│   ├── Checkbox.less
│   └── index.ux
├── ConfigNetSteps
│   ├── ConfigNetSteps.less
│   └── index.ux
├── Btn
│   ├── Button.less
│   └── index.ux
├── Btns
│   ├── Buttons.less
│   └── index.ux
├── IOTSwitch
│   ├── index.ux
│   └── switch.less
├── Loading
│   ├── Loading.less
│   └── index.ux
├── Modal
│   ├── Modal.less
│   └── index.ux
├── NavBar
│   ├── NavBar.less
│   └── index.ux
├── README.md
├── TwoLevelList
│   ├── TwoLevelList.less
│   └── index.ux
├── theme.less

```

## 注意
+ 组件使用了less,需要在项目中执行 npm install --save-dev less-loader less
+ 如果想修改组件默认样式,请修改组件下的theme.less文件
+ 注意组件图片的引用路径.路径错误会导致图片无法显示. 图片路径请使用绝对路径或者http地址,例如你的 icon.png图片在  <project name>/src/Mydir/icon.png下,那么绝对路径就是/Mydir/icon.png
+ 请引入正确的路径,示例代码的路径与你的路径不同,组件如果在node_modules下,请正确引用到node_modules下
+ 有的示例使用了prompt,manifest.json文件需要添加接口声明,[接口声明示例](https://doc.quickapp.cn/features/system/prompt.html)
+ 如果使用IOT接口,manifest.json文件需要添加接口声明{"name": "service.iot"},然后import IOT from '@service.iot' 或 const IOT = require('@service.iot')
+ 组件是按照1080设计宽度开发的,manifest.json文件config.designWidth需要设置成1080,可以参考[页面样式与布局-方案一](https://doc.quickapp.cn/tutorial/framework/page-style-and-layout.html)





## 组件
+ Btn按钮
+ Btns按钮组
+ Checkbox选项
+ IOTSwitch开关
+ Loading
+ Modal对话框
+ ActionSheet对话框
+ NavBar导航栏
+ ConfigNetSteps配网步骤
+ TwoLevelList二级列表


### Btn按钮

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| title | 按钮显示的文字 | string | 空字符串 |
| type | 设置按钮类型，可选值为 primary default dashed或者不设| string | default |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
|  onevt-click | 点击按钮事件 | | |


### 示例
``` html 

<import name="Btn" src="../../../Btn/index.ux"></import>
<template>
    <div class="box">
        <div class="item">
            <Btn type="{{type}}" title='{{title}}' block="{{block}}" onevt-click="handleClickButton"></Btn>

        </div>
        <div class="item">
            <Btn type="dashed" title='取消'></Btn>

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



### Btns按钮组


属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| show-text | 是否显示文字 | boolean | false |
| column | 按钮列数目 | number | 4 |
| icon-width | 按钮图标宽度 | number | 150 |
| text-height | 文字高度 | number | 50 |
| padding-top | 按钮组padding-top | number | 20 |
| padding-bottom | 按钮组padding-bottom | number | 20 |
| data | data是一个数组,数组里的对象是每个按钮的信息,| array | |
| onevt-click | 点击事件 |  | |


属性data数组的项目:

| 属性 | 说明 | 类型  | 默认值 |
| --- | ---- | --- | --- |
| disabled | 按钮失效状态 | boolean | false |
| name | 文字| string | |
| fontColor | 文字颜色 | string |
| url | 图标路径 | string | |

### 示例

``` html

<import name="Btns" src='../../../Btns/index.ux'></import>
<template>
  <!-- template里只能有一个根节点 -->
  <div class="box">
    <div class="c1">
      <text class="t1" @click="fn">点击切换是否显示button文字</text>
      <text>是否显示button文字:{{ showText}}</text>
    </div>
    <Btns show-text="{{showText}}" column="{{column}}" icon-width="{{iconWidth}}" padding-top="{{paddingTop}}" padding-bottom="{{paddingBottom}}"
      text-height="{{textHeight}}" data="{{data}}" onevt-click="handleClick"></Btns>
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
    padding: 40px;
  }

  .t1 {
    border-radius: 10px;
    border: 1px solid blue;
    padding: 40px;

  }

  text {
    font-size: 40px;
  }
</style>

<script>

  export default {

    data() {
      return {

        showText: true,
        column: 4,
        iconWidth: 140,
        paddingTop: 60,
        paddingBottom: 60,
        textHeight: 80,

        data: [
          {
            disabled: false,
            //注意: url请使用绝对路径,例如你的 icon.png图片在  <project name>/src/Mydir/icon.png下,那么绝对路径就是/Mydir/icon.png
            url: '/demo/testBtns/rec.jpg',
            name: '文字1',
            fontColor: 'blue',

          },
          {
            disabled: false,
            url: '/demo/testBtns/icon.png',
            name: '文字1',
            fontColor: '#ff0000',

          }, {
            disabled: true,
            url: '/demo/testBtns/rec.jpg',
            name: '文字1',
            fontColor: '#ff0000',
          }


        ]
      }
    },
    handleClick(evt) {
      let { index, item } = evt.detail;
      if (index === 1) {
        if (item['url'] === '/demo/testBtns/icon.png') {
          item['url'] = '/demo/testBtns/rec.jpg';
        } else {
          item['url'] = '/demo/testBtns/icon.png';
        }
      }


    },
    fn() {

      this.showText = !this.showText;


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
        <!-- <text onclick="click" class="btn">点击切换disabled值</text>
        <text>disabled值:{{disabled}}</text>
        <text>checked值:{{checked}}</text> -->
        <div>
            <CheckBox name="age" value="{{15}}" checked="{{checked}}" onevt-change="handleChagne" disabled="{{disabled}}"></CheckBox>
        </div>


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

<import name="IOTSwitch" src="../../IOTSwitch/index.ux"></import>
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
<import name="ConfigNetSteps" src="../../../ConfigNetSteps/index.ux"></import>


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
| isGroup | 和属性header或者padding配合使用 | boolean | false|
| header | 和属性isGroup配合使用,分组页眉 | string 或boolean | false |
| padding | 和属性isGroup配合使用,分组padding | number 或boolean | false |
| footer | 分组页脚 | array 或 boolean | false |


### 示例

``` html
<import name="TwoLevelList" src="../../../TwoLevelList/index.ux"></import>
<template>
    <TwoLevelList datasource="{{datasource}}" header="{{header}}" footer="{{footer}}" title="这是二级列表大标题" showicon="{{showicon}}" onevt-back="backFn"
        onevt-arrow="clickArrow"></TwoLevelList>
</template>

<style lang="less">
</style>

<script>

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
                    link: '/demo/home',
                    text: '这也是链接',
                }, {
                    text: '青青子衿'
                },
                {
                    link: '/demo/home',
                    text: '这是链接',
                }
            ],
            // footer:undefined,
            datasource: [
                {
                    title: '小明',
                    icon: '/demo/testBtns/rec.jpg',
                },
                {
                    isGroup: true,
                    header: '这是分组标题',
                },
                {
                    title: '李四',
                    icon: '/demo/testBtns/icon.png',
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
                    icon: '/demo/testBtns/rec.jpg',
                },
                {
                    isGroup: true,
                    footer: [
                        {
                            text: '这是分组脚注,可以有链接,带有link的是链接否则就是文字'
                        },

                        {
                            link: '/demo/home',
                            text: '这是链接1',
                        }, {
                            text: '这是文字'
                        },
                        {
                            link: '/demo/home',
                            text: '这是链接2',
                        }
                    ]
                },
                {
                    title: '主标题',
                    icon: '/demo/testBtns/icon.png',
                    rightText: '右侧小字'
                }
            ]

        },
        backFn(evt) {
            console.log('back')
            //点击左侧箭头
         
        },
        clickArrow: function (evt) {
            console.log(evt.detail.item);
            //点击右侧箭头
          
        }

    }
</script>

```


## IOT接口

``` javascript




/**
 * 具体参数配置请看IOT开发者文档
 */

IOT.getProvider()

IOT.send({
    action: "configNetworkFinish",
    data: {
        deviceName: `deviceName`,
        deviceUuid: `deviceUuid`,
        resultCode: `resultCode`
    },
    success: function (data) {

    },
    fail: function (data, code) {

    }
});


IOT.send({
    action: "encodeData",
    data: {
        encodeType: `encodeType`,
        dataSrc: `dataSrc`
    },
    success: function (data) {

    },
    fail: function (data, code) {

    }
})


IOT.send({
    action: "decodeData",
    data: {
        decodeType: `decodeType`,
        dataSrc: `dataSrc`
    },
    success: function (data) {

    },
    fail: function (data, code) {

    }
})


IOT.send({
    action: "getVersion",
    success: function (data) {

    },
    fail: function (data, code) {

    }
})

IOT.send({
    action: "getWifiList",
    success: function (data) {

    },
    fail: function (data, code) {

    }
})



IOT.send({
    action: "jumpMainPage",
})


IOT.send({
    action: "queryDeviceStatus",
    data: {
        deviceList: [{
            deviceName: `deviceName`,
            deviceUuid: `deviceUuid`,
            type: `type`
        }]
    },
    success: function (data) {

    },
    fail: function (data, code) {

    }
})



IOT.send({
    action: "sendAccount",
    data: {
        accessToken: `accessToken`,
        refreshToken: `refreshToken`,
        openId: `openId`,
        scope: `scope`
    },
    success: function (data) {

    },
    fail: function (data, code) {

    }
})


IOT.send({
    action: "startConfigDevice",
    data: {
        connectData: {
            deviceSsid: `deviceSsid`,
            ssid: `ssid`,
            wifiPassword: `wifiPassword`,
            secretType: `secretType`
        },
        deviceInfo: {
            deviceName: `deviceName`,
            deviceUuid: `deviceUuid`,
            type: `type`
        }
    },
    success: function (data) {

    },
    fail: function (data, code) {

    }
})



IOT.send({
    action: "startScanDeviceWifi",
    success: function (data) {

    },
    fail: function (data, code) {

    }
})


IOT.send({
    action: "stopConfigDevice"
})

```

