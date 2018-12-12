### Btns按钮组


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
| ontap | 点击事件 |  | |


属性data数组的项目:

| 属性 | 说明 | 类型  | 默认值 |
| --- | ---- | --- | --- |
| disabled | 按钮失效状态 | boolean | false |
| name | 文字| string | |
| fontColor | 文字颜色 | string |
| url | 图标路径 | string | |

### 注意 ⚠️

```
 1.0.0 版本点击事件使用 onevt-click 而非 ontap

```

### 示例

``` html

<import name="Btns" src='iot-ui/Btns/index.ux'></import>
<template>
  <!-- template里只能有一个根节点 -->
  <div class="box">
    <div class="content-box">
      <div>
        <text class="btn-text" @click="handleToggle">点击切换是否显示button文字</text>
      </div>
      <text class="content">是否显示button文字:{{ showText }}</text>
    </div>
    <Btns show-text="{{showText}}" column="{{column}}" icon-width="{{iconWidth}}" padding-top="{{paddingTop}}" padding-bottom="{{paddingBottom}}"
      text-height="{{textHeight}}" data="{{data}}" ontap="handleClick"></Btns>
  </div>
</template>

<style>
  .box {
    flex-direction: column;
  }

  text {
    font-size: 40px;
  }

  .content-box {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
  }

  .btn-text {
    border-radius: 10px;
    background-color: #409EFF;
    padding: 40px;
    color:#fff;
  }

  .content {
    height: 200px;
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
            //注意:url请使用绝对路径,例如你的 icon.png图片在  <project name>/src/Mydir/icon.png下,那么绝对路径就是/Mydir/icon.png
            url: "/testBtns/rec.jpg",
            name: "文字1",
            fontColor: "blue"
          },
          {
            disabled: false,
            url: "/testBtns/icon.png",
            name: "文字1",
            fontColor: "#ff0000"
          },
          {
            disabled: true,
            url: "/testBtns/rec.jpg",
            name: "文字1",
            fontColor: "#ff0000"
          }
        ]
      };
    },
    handleClick(evt) {
      let { index, item } = evt.detail;
      if (index === 1) {
        if (item["url"] === "/testBtns/icon.png") {
          item["url"] = "/testBtns/rec.jpg";
        } else {
          item["url"] = "/testBtns/icon.png";
        }
      }
    },
    handleToggle() {
      this.showText = !this.showText;
    }
  };
</script>

```