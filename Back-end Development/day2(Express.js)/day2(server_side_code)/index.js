const express= require("express");
const app= express();

// console.dir(app);

let port =3010;

app.listen(port, ()=>{
  console.log(`app is listening on port ${port}`);
});

// app.use((req, res)=>{
//   console.log("request received");
//   // console.log(req);
// let Response="<h1>Sending Response</h1> <ul><li>Request sent</li> <li>response received</li></ul>"
//   res.send(Response);
// });


                      // Query strings
// app.get("/",(req, res)=>{
//   res.send('You send the request to the root path');
// });

// app.get("/search",(req,res)=>{
//   let {q}=req.query;
//   console.log(req.query);
//   if(!q){
//     res.send("Nothing searched");
//   }

//   res.send(`<h1>searched result is : ${q}</h1>`);
// });



//                 routing 

// app.get("/home",(req,res)=>{
//   res.send("You sent contacted to home path using get method");
// });

// app.get("/search", (req,res)=>{
//   res.send("You contacted to Search path");
// });

// app.get("*",(req,res)=>{
//   res.send("this path doesn't exists");
// });

// app.post("/post",(req,res)=>{
//   res.send("You sent request to post");
// });


//                 path parameters
app.get("/",(req, res)=>{
  res.send('You send the request to the root path');
});

app.get("/:username/:id",(req,res)=>{
  let {username, id}=req.params;
  res.send(`<h1>welcomt to profile of: @${username}`);
})