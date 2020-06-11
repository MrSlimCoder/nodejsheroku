const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT | 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res) =>
{
    res.send("Hello World")
})

app.listen(PORT, (err) =>
{
    if(err) console.log(err);
    else console.log("Server is Running! on PORT "+PORT);
})