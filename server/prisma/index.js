const express = require("express");
const app = express();

app.use(express.json())

app.use('/api/user', require("./routes/user"))
/* app.get("/",(req,res)=>{
    res.send("I am working")
}) */


app.listen(5000, ()=>{
    console.log("Listening on port 5000")
})