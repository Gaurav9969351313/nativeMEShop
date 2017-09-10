var express = require("express");
var morgan = require("morgan");
var mongoose = require('mongoose'); 

var app = express();

//mlab gauravtalele1994 gauravtalele2015@gmail.com gauravtalele*123


mongoose.connect('mongodb://root:sss*123@ds133044.mlab.com:33044/ecommerece', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.use(morgan('dev'));

app.listen(3000,function(error){
 
 if(error) throw error;
	console.log("Server is running on 3000 port");

})

app.get('/',function(req,res){
	var name = "Shree Swami Samartha";
	res.json("My Guru Is :- " + name);
})