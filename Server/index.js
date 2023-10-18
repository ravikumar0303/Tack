const express = require("express");
const app=express();
const mysql= require("mysql2")



const db= mysql.createPool({
    host:"localhost",
    user:"root",
    password:"welcome",
    database:"test",
    //dialect: "mysql"
});

app.get("/",(req,res)=>{
    const sqlInsert="INSERT INTO Hello(id,helloworld) VALUES (12,'helloworld');"
    db.query(sqlInsert, (err, result)=>{
        res.send("hello World");
    })
    
});

app.listen(2001,()=>{
    console.log("App is slisten on 2001");
});