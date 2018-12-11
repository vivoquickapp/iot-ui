### TwoLevelList二级列表

属性:

| 属性  | 说明   |  类型 | 默认值  |
| -----| ---- | ---- | ---- |
| datasource | 数据数组 | array | [] |
| title | 标题 | string | |
| showicon | 是否显示图标 | boolean | false | 
| header | 是否显示页眉 | string 或 boolean | false |
| footer | 是否显示页脚 | array 或 boolean | false |
| onback | 返回按钮事件 | | |
| onarrow | 右边箭头按钮事件 | | |

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

### 注意 ⚠️

```
1.0.0 版本返回按钮事件使用 onevt-back 而非 onback
1.0.0 版本右边箭头按钮事件使用 onevt-arrow 而非 onarrow

```

### 示例

``` html
<import name="TwoLevelList" src="iot-ui/TwoLevelList/index.ux"></import>
<template>
  <TwoLevelList
    datasource="{{datasource}}"
    header="{{header}}"
    footer="{{footer}}"
    title="这是二级列表大标题"
    showicon="{{showicon}}"
    onback="handleClickBack"
    onarrow="handleClickDetailArrow"
  ></TwoLevelList>
</template>

<style lang="less"></style>

<script>
export default {
  onInit() {},
  private: {
    showicon: true,
    header: "这是页眉,页眉是针对整个页面做说明,而非针对单项列表,句末加标点.",
    footer: [
      {
        text: "这是页脚可以有链接,带有link的是链接否则就是文字"
      },

      {
        link: "/home",
        text: "这也是链接"
      },
      {
        text: "青青子衿"
      },
      {
        link: "/home",
        text: "这是链接"
      }
    ],
    // footer:undefined,
    datasource: [
      {
        title: "小明",
        icon: "/testBtns/rec.jpg"
      },
      {
        isGroup: true,
        header: "这是分组标题"
      },
      {
        title: "李四",
        icon: "/testBtns/icon.png",
        subTitle: "副标题",
        rightText: "右侧小字"
      },
      {
        isGroup: true,
        padding: true
      },
      {
        title: "主标题",
        subTitle: "副标题",
        icon: "/testBtns/rec.jpg"
      },
      {
        isGroup: true,
        footer: [
          {
            text: "这是分组脚注,可以有链接,带有link的是链接否则就是文字"
          },

          {
            link: "/home",
            text: "这是链接1"
          },
          {
            text: "这是文字"
          },
          {
            link: "/home",
            text: "这是链接2"
          }
        ]
      },
      {
        title: "主标题",
        icon: "/testBtns/icon.png",
        rightText: "右侧小字"
      }
    ]
  },
  handleClickBack(evt) {
    console.log("back");
    //点击左侧箭头
  },
  handleClickDetailArrow: function(evt) {
    console.log(evt.detail.item);
    //点击右侧箭头
  }
};
</script>


```