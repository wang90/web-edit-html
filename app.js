var http= require('http')
var server = http.createServer(function(req,res){
      console.log('hahaha');
      res.setHeader('content-type','text/plain;charset=gbk')
    //告诉浏览器，返回的数据，你当成字符串就可以了，用gbk去解码。
    //这个解码方式权重更高，因为这时候html文件还没解析到里面的charset的设置呢。
    res.write('hello world');
    res.end();
})
server.listen(3333);