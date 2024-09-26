const express= require("express");
const app= express();
const path =require("path");
let port = 3000;
app.set("views", path.join(__dirname, "/views"));
app.set("views engine", "ejs");

app.set(express.static(path.join(__dirname, "public/css")))
app.listen(port, ()=>{
console.log(`Server is listening on the port : ${port}`);
})

app.get("/", (req, res)=>{
  res.render("home.ejs");
})
app.get("/ig/:username", (req, res)=>{
  let {username}=req.params;
  res.render("profile.ejs", {username});
})