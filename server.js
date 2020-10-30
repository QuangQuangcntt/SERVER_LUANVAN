var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views","./views");
app.use(express.static("public"));

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(process.env.PORT);

//Mongoose 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ngocquy:hannguyen2708@cluster0-ehhg3.mongodb.net/word?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false},function(err){
    if(err){
        console.log("Error mongodb connected!!!!");
    }
    else {
        console.log("MongoDB conntec sucessfully");
    }

});





require("./fileManager")(app);
require("./Route/Word")(app);