var express = require("express");
var morgan = require("morgan");

var app = express();

app.use(morgan('dev'));

app.listen(3000,function(error){
 
 if(error) throw error;
	console.log("Server is running on 3000 port");

})

app.get('/',function(req,res){
	var name = "Shree Swami Samartha";
	res.json("My Guru Is :- " + name);
})