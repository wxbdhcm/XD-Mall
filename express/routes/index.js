var express = require('express');
var router = express.Router();
var mysql = require('mysql');  
var data = require('../public/data.json')
/* GET home page. */

router.get('/',(req,res)=>{
//   const sql = "insert into commodityList(id,img,name,price,number,introduction) values (?,?,?,?,?,?)" //SQL语句.
//    var connection = mysql.createConnection({      //创建mysql实例
//        host:'localhost',
//        port:'3306',
//        user:'root',
//        password:'123456',
//        database:'vue'
//    });
//    connection.connect();
//    for(let i in data.around){
//     connection.query(sql,[data.around[i].id,data.around[i].img,data.around[i].name,data.around[i].price,data.around[i].number,data.around[i].introduction],(err,result)=>{
//       if(err) {
//           console.log(err);
//           // str = JSON.stringify(result)
//       }
//       console.log('商品'+ data.tv[i].id+"----添加成功")
//       // console.log(result); // 打印添加结果
//   })
//   }
 })
module.exports = router;

