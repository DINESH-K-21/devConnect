const express = require('express')

const app = express()





app.get("/",(req,res)=>{
    res.send("Hello Path /")
})
app.get("/user",(req,res)=>{
    res.send("Hello Path /user")
})


app.listen("7777",()=>{
    console.log(`server is runnin on PORT 7777`);
})