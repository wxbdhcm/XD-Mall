var express = require('express');
var router = express.Router();
var mysql = require('mysql'); 
/* GET users listing. */


router.get('/', function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials","true");
  res.header("X-Powered-By",' 3.2.1')
  var sql = 'SELECT * FROM account';
  var connection = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'123456',
  database:'vue'
});
connection.connect();
connection.query(sql, function (err,result) {
  if(err){
      console.log('[SELECT ERROR]:',err.message);
  }
  str2 =JSON.stringify(result)  // 获取全部数据
  //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
  //console.log(result);   //数据库查询结果返回到result中
  
});
connection.end();
  res.send(str2);
});
module.exports = router;
