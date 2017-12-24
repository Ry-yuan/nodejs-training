// 引入fs模块
var fs = require("fs");
// 读取input.txt文件内容 同步阻塞
// var data = fs.readFileSync('../input.txt');
// 输出
// console.log(data.toString());



// 异步，使用回调函数
fs.readFile('../input.txt',function(err,data){
    if(err) {
        console.log(err);
    }
    console.log(data.toString())
})