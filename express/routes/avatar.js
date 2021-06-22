var express = require('express');   //引入express模块
var router = express.Router();
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例

router.post('/',(req,res)=>{
    var connection = mysql.createConnection({      //创建mysql实例
        host:'localhost',
        port:'3306',
        user:'root',
        password:'123456',
        database:'vue'
    });
    connection.connect();
    const sql = `UPDATE account SET avatar = '${req.body.avatar}' WHERE Username = '${req.body.userName}'`
    connection.query(sql,(err,result)=>{
        if(err) {
            console.log(err);
        }
    })
    connection.end();
    res.send(req.body)
    console.log(req.body)
  })

module.exports = router;
