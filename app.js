const express = require("express");
const bodyParser = require("body-parser");
const ifeng1 = require("./routes/ifeng1.js")



var app = express();

var server = app.listen(3003);
console.log("ifeng1 server success port 3003");
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({
    extended: false
}))



app.use("/ifeng1", ifeng1);