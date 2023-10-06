const express = require("express");
const app = express(); //tao localhost
const PORT = 3333;

app.use('/public', express.static(__dirname + '/public'));

app.listen(PORT,function(){
    console.log("server is running...");
});
//Route
app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/view/login.html");
});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/view/registration.html");
});



