var express = require('express');   //引入express模块
var router = express.Router();
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例

router.post('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    // res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("X-Powered-By",' 3.2.1')
    let account = []
    var sql = 'SELECT * FROM account';
    var str = "";
    var str2 = "";
    const sql2 = "insert into account(Username,Password,userPhone) values (?,?,?)" //SQL语句.
    var connection = mysql.createConnection({      //创建mysql实例
        host:'localhost',
        port:'3306',
        user:'root',
        password:'123456',
        database:'vue'
    });
    connection.connect();
    res.send(req.body)
    account.unshift(req.body)
    let sqlParams 
    if(account[0].username){
         sqlParams = [account[0].username,account[0].password,account[0].userPhone]
    }
    connection.query(sql2,sqlParams,(err,result)=>{
        if(err) {
            console.log(err);
            str = JSON.stringify(result)
        }
        console.log('用户'+ account[0].username+"----注册成功")
        // console.log(result); // 打印添加结果
    })
    connection.query(sql, function (err,result) {
        if(err){
            console.log('[SELECT ERROR]:',err.message);
        }
        str2 =JSON.stringify(result)
        console.log(result)
        //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
        //console.log(result);   //数据库查询结果返回到result中 
    });
    // app.get('/',function (req,res) {
    //     res.send(str2)  //服务器响应请求
    // });
    // connection.end();
    connection.end();
  })

// router.get('/user',(req,res)=>{
//     res.send(str2 )
// })


// app.listen(8001,function () {    //监听3000端口
//     console.log('Server running at 8001 port');
// });

module.exports = router;
