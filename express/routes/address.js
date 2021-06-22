var express = require('express');   //引入express模块
var router = express.Router();
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例

router.get('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    // res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("X-Powered-By",' 3.2.1')
    var connection = mysql.createConnection({      //创建mysql实例
        host:'localhost',
        port:'3306',
        user:'root',
        password:'123456',
        database:'vue'
    });
    connection.connect();

    var Sql = `SELECT * FROM useraddressList WHERE userName = '${req.query.userName}'`
    connection.query(Sql,(err,result)=>{
        if(err) {
            console.log(err);
        }
        res.send(result)
    })
    connection.end();
  })
module.exports = router;
