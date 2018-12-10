## 使用iot-ui组件库方法

* 安装hap-toolkit, hap-toolkit版本>=0.0.37,查看hap-toolkit版本号执行 hap -V
* 组件使用了less,需要在项目中执行npm install --save-dev less-loader less
* 项目manifest.json文件config.designWidth需要设置成1080,组件库是按照设计宽度1080开发的
* 安装iot-ui组件库 npm install iot-ui --save
* 使用import标签引用组件例如使用Btn组件:

``` html
 <import name="Btn" src="iot-ui/Btn/index.ux"></import>
```

## 注意

+ 如果想修改组件默认样式,请修改组件库下的theme.less文件
+ 注意组件图片的引用路径.路径错误会导致图片无法显示. 图片路径请使用绝对路径或者http地址,例如你的 icon.png图片在  <project name>/src/Mydir/icon.png下,那么绝对路径就是/Mydir/icon.png

+ 有的示例使用了prompt,manifest.json文件需要添加接口声明,[接口声明示例](https://doc.quickapp.cn/features/system/prompt.html)
+ 如果使用IOT接口,manifest.json文件需要添加接口声明{"name": "service.iot"},然后import IOT from '@service.iot' 或 const IOT = require('@service.iot')
+ 组件是按照1080设计宽度开发的,manifest.json文件config.designWidth需要设置成1080,可以参考[页面样式与布局-方案一](https://doc.quickapp.cn/tutorial/framework/page-style-and-layout.html)

## 环境要求

Node.js (>= 8.9.*), Npm version 4+(Yarn preferred), and Git.

## 组件
+ [Btn 按钮](/docs/Btn.md)
+ [Btns 按钮组](/docs/Btns.md)
+ [Checkbox 选项](/docs/Checkbox.md)
+ [ISwitch 开关](/docs/ISwitch.md)
+ [Loading](/docs/Loading.md)
+ [Modal 对话框](/docs/Modal.md)
+ [ActionSheet 对话框](/docs/ActionSheet.md)
+ [NavBar 导航栏](/docs/NavBar.md)
+ [ConfigNetSteps 配网步骤](/docs/ConfigNetSteps.md)
+ [TwoLevelList 二级列表](/docs/TwoLevelList.md)


## 运行本项目

``` bash

# 克隆项目
git clone https://github.com/vivoquickapp/iot-ui.git your-project-name
# 进入目录
cd your-project-name
# 安装依赖包
npm install
# 监听打包快应用
npm run watch
# 打开服务器,扫描安装快应用
npm run server

```
