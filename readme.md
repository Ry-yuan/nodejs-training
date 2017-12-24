# nodejs学习整理

1.nodejs 在我看来是给与了js在服务器端运行的平台，使得从前只能运行在浏览器这个沙箱上面，摇身一变能够运行在浏览器之外。

2.在这个仓库中，学习nodejs，应用于web开发中。  

3.不同于其他语言比如php有对应的服务器apache能够配置直接运行，在nodejs中需要用http模块来搭建一个服务器。server.js文件中就是一个简单的nodejs的web服务器。    

4.nodejs中系统提供的模块很少，所以一些开发者就开发了许许多多的模块，npm是一个模块的管理工具，通过他可以轻易的获取并使用某个模块；  

5.Repl 在nodejs平台中额外的提供了一个交互环境用于方便开发者调试js代码。打开repl环境：安装node后--命令行输入node即可。  

6.node是异步的：每一个api都提供了异步的操作。通过使用异步回调函数来完成，举个例子：比如我读取一个文件，这需要很长的时间，如果同步的话会阻塞后面函数的执行，所以这里先猜测node读取文件会调用其它线程，等到完成后将回调函数放入到一个消息队列中，最后通过eventloop来将回调函数放入执行栈中执行。(fs.js例子)  

7.事件循环：使得nodejs能够显示非阻塞的i/o操作。尽管JavaScript事实上是单线程的 -- 通过在可能的情况下把操作交给操作系统内核来实现。所以在异步执行这一块和浏览器中js的异步执行很像的，在主线程执行js过程，遇到了异步操作，会交给系统的内核（其他线程去把这件事搞定，搞定后把回调函数放在任务队列中，等着event loop去拿这个回调函数到主线程去执行）；    

8.buffer（二进制缓存区）  Stream（流）还没详细研究。。  

9.模块系统：为了让nodejs文件可以相互的调用，nodejs提供的模块系统。主要有两个关键的东西：require(用来引进某一个某块)，module.exports(暴露模块接口)。  (module1.js 和 module2.js)  


10 .路由 url模块  文件系统 fs  

11.get post方法  

12.express框架 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
使用 Express 可以快速地搭建一个完整功能的网站。

