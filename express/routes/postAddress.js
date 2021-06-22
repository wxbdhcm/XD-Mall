var express = require('express');   //引入express模块
var router = express.Router();
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例

router.post('/',(req,res)=>{
   const sql = "insert into useraddressList(userName,userAddress,userPhone,receiver,userAddressDetails) values (?,?,?,?,?)" //SQL语句.
    var connection = mysql.createConnection({      //创建mysql实例
        host:'localhost',
        port:'3306',
        user:'root',
        password:'123456',
        database:'vue'
    });
    connection.connect();
    res.send(req.body)
    let sqlParams = [req.body.userName,req.body.userAddress,req.body.userPhone,req.body.receiver,req.body.userAddressDetails]
    connection.query(sql,sqlParams,(err,result)=>{
        if(err) {
            console.log(err);
            // str = JSON.stringify(result)
        }
        console.log('用户地址'+ req.body.userAddress+"----添加成功")
        // console.log(result); // 打印添加结果
    })
    connection.end();
  })
module.exports = router;
