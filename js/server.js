// 引入http模块
var http = require('http');
http.createServer(function(require, response) {
    //发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Text': 'text/plain' });
    // 发送响应数据 "Hello World"
    response.end('Hello world');
}).listen(8080);

console.log('sever running in 8080 port');

// var http  = require('http');
// http.createServer(function(req,res){
//     res.writeHead('200',{'Content-Text':'text/plain'});
//     response.end('hello');
// });
// http.listen(8080);

