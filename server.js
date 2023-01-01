const express=require('express')
const app=express();
app.get('/',function(req,res){
    res.sendFile("./public/first.html",{root:__dirname});
})
app.listen(8085,function(req,res){
    console.log("jai shri ram");
})