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
