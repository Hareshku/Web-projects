const express= require("express");
const app = express();
// following to lines used for post request to read the data at server side from front-end
app.use(express.urlencoded({extended:true}));
// This middleware is used to parse URL-encoded data (typically from HTML forms)
// this parse the urlencoded data in express understandabel format and parse to request body
app.use(express.json());
//This middleware is used to parse JSON data in the request body.
// this parse the json data in express understandabel format or request body
let port= 8080;

app.listen(port, ()=>{
  console.log(`Server is listening on the port: ${port}`);
})

app.get("/register",(req, res)=>{
  let {name}=req.query;
  res.send(`You response have been recorded @${name}`);
});

app.post("/register",(req, res)=>{
  let {name}=req.body;
  res.send(`You response have been recorded @${name}`);
});