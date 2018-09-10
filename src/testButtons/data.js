
let data = [
  {
    disabled: false,
    icons: [
      {
        url: './rec.jpg',
        name: '小o活',
        fontColor: '#ff0000',
      }, {
        url: './icon.png',
        name: '小微啊',
        fontColor: '#0000ff',
      }, {
        url: '../Common/logo.png',
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
        url: './rec.jpg',
        name: '小微激活',
        fontColor: '#ff0000',
      }, {
        url: './icon.png',
        name: '小微',
        fontColor: '#0000ff',
      }, {
        url: '../Common/logo.png',
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
        url: './rec.jpg',
        name: '小微激活',
        fontColor: '#ff0000',
      }, {
        url: './icon.png',
        name: '小微',
        fontColor: '#0000ff',
      }, {
        url: '../Common/logo.png',
        name: '不可用',
        fontColor: '#ccc',
      }],
    value: 0,
    click: function (item) {

      item['value'] === 1 ? item['value'] = 0 : item['value'] = 1;

      console.log(item)

    }
  }


]


export default data