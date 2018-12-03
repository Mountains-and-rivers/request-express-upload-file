var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var server = http.createServer(app);
var multer = require('multer');
server.listen(8888);
console.log('Server run...');
// 解析 application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 实例化上传模块(前端使用参数名为file)
var upload = multer({ dest: 'uploads/'}).single('file');
app.put("/upload",upload,function(req,res,next){
  //  请求路径
  var url = global.baseURL+req.url;

  var obj = req.file;
  console.log('obj====',obj);
  var tmp_path = obj.path;
  var new_path = "public/images";
  console.log("原路径：" + tmp_path);

  /*修改上传文件地址*/
  upload(req,res,function(err){
    if (err) {
      console.log('上传失败');
    }else{
      console.log('上传成功');
    }
  });

  // 反馈上传信息
  res.send({
    'states':'success'
  });
});