const express = require('express')
const mysql = require('mysql2')
const app = express()
const bodyparser = require('body-parser')
const cors =  require("cors");

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:'sample',
    connectionLimit:100,
})

db.getConnection((err,connection)=>{
    if(err) console.log(err)
    console.log('conncetion established')   
})

app.get('/users',(req,res)=>{
    const sql='select * from practice2'
    db.query(sql,(err,result)=>{
        if(err) console.log(err)
        else
        res.send(JSON.stringify(result))
    })
})

app.post('/insert',(req,res)=>{
    const name="bhavya";
    const password="password1234bb";
    console.log(req.body)
    const sql='insert into practice2(name,password) values(?,?)'
    db.query(sql,[name,password],(err,result)=>{
       if(err)console.log(err)
    })
})

app.listen(5000,(req,res)=>{
    console.log("server started on port 5000");
})

