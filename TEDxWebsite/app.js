const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

let port = process.env.port || 3000;

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/gallery",(req,res)=>{
    res.render('gallery');
});


app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("/register",(req, res)=>{
    res.redirect("https://www.townscript.com/e/tedxbmsce-2018-002010");    
})

app.listen(port,()=>{console.log("Server Started...");});



