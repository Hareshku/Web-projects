const express = require("express");
const app = express();

const path = require("path");  // if we start server from somewhere else other than EJSDir which is parent of the views then is will show the correct path

let port =8080;
app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/Views"));  // if we start server from somewhere else other than EJSDir which is parent of the views then is will show the correct path

app.listen(port, (req, res)=>{
  console.log(`Server is listening on port ${port}`);
});

// whne you want to use multiple static files including css, js then this is the best way,
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.get("/home", (req, res)=>{
  let  diceVal= Math.floor(Math.random()*6)+1;
  res.render("home.ejs", {diceVal});
});

app.get("/", (req, res)=>{
  let  diceVal= Math.floor(Math.random()*6)+1;
res.render("home.ejs", {diceVal}); // passing data to ejs

});


//                         instagram ejs
app.get("/ig/:username", (req, res)=>{
  let {username} =req.params;
  let InstaData= require("./data.json");
  let data = InstaData[username]

  // let {username}= req.params;
  // let followers=['Haresh',"Kelash", "Sandeep"];
  // res.render("Instagram.ejs", {username, followers});

  if(data){
    res.render("Instagram.ejs", {username,data});
  }else{
    res.render("error.ejs");
  }
  
});


