
let data = [
  {
    disabled: false,
    icons: [
      {
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


export default data