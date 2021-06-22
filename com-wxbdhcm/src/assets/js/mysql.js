var mysql = require('mysql');     //引入mysql模块
export function deleteSql(deleteUsername){
    var connection = mysql.createConnection({      //创建mysql实例
        host:'localhost',
        port:'3306',
        user:'root',
        password:'123456',
        database:'vue'
    });
    connection.connect();
    var deleteSql = `DELETE FROM ACCOUNT WHERE Username = '${deleteUsername}'`
    connection.query(deleteSql,(err,result)=>{
        if(err) {
            console.log(err);
        }
    })
}

