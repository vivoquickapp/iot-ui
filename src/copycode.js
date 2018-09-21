var fs = require('fs');
var path = require('path');

//解析需要遍历的文件夹，我这以E盘根目录为例
var filePath = path.join(__dirname, 'iotUI');

//调用文件遍历方法
var arr = []
fileDisplay(filePath, arr);

function fileDisplay(filePath, arr) {
    //根据文件路径读取文件，返回文件列表
    let files = fs.readdirSync(filePath);
    //遍历读取到的文件列表
    files.forEach(function (filename) {
        //获取当前文件的绝对路径
        let filedir = path.join(filePath, filename);
        let stats = fs.statSync(filedir)

        let isFile = stats.isFile(); //是文件
        let isDir = stats.isDirectory(); //是文件夹
        if (isFile) {
            if (!filedir.endsWith('.DS_Store') && !filedir.endsWith('.png') && !filedir.endsWith('.jpg') && !filedir.endsWith('.jpeg')) {
                arr.push(filedir)
            }


        }
        if (isDir) {
            fileDisplay(filedir, arr); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
    });
}

// console.log(arr);
arr.map((item) => {
    fs.appendFileSync(path.join(__dirname, '代码.txt'), item.replace('/Users/luopingyi/Desktop/iot-ui/src/iotUI/', '') + '\r');
    fs.appendFileSync(path.join(__dirname, '代码.txt'), fs.readFileSync(item))
})

