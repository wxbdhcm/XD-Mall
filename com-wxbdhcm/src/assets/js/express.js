const express = require('express')
const app = express()
app.get('/ajax',(request, res)=>{
    //设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send('HELLO EXPRESS')
})
app.listen(8002,()=>{
    console.log('8002端口开启')
})