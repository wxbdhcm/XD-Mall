var express = require('express');   //引入express模块
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例
 
var connection = mysql.createConnection({      //创建mysql实例
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'vue'
});
connection.connect();
var sql = 'SELECT * FROM account';
var str = "";
var str2 = "";
const sql2 = "insert into account(username,password) values(?,?)" //SQL语句
const sqlParams = ["xiaoming","123456"] // 动态参数

connection.query(sql2,sqlParams,(err,result)=>{
    if(err) {
        console.log(err);
        str = JSON.stringify(result)
        return
    }
    console.log(result); // 打印添加结果
})
connection.query(sql, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    str2 =JSON.stringify(result)
    //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
    //console.log(result);   //数据库查询结果返回到result中
    console.log(str);
});
app.get('/',function (req,res) {
    res.send(str +str2);  //服务器响应请求
});
connection.end();
app.listen(8001,function () {    //监听3000端口
    console.log('Server running at 8001 port');
});