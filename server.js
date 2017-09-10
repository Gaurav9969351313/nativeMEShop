var express = require("express");
var morgan = require("morgan");
var mongoose = require('mongoose'); 
var User = require('./models/user');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//mlab gauravtalele1994 gauravtalele2015@gmail.com gauravtalele*123


mongoose.connection.openUri('mongodb://root:sss*123@ds133044.mlab.com:33044/ecommerece', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.post('/createuser',function(req,res,next){
	//while testing it on postman use xxx-urlencoded body to send
	var user = new User();
	user.profile.name = req.body.name;
	user.password = req.body.password;
	user.email = req.body.email;

	user.save(function(err){
		if(err) throw err;
		res.json("user Created Sucessfully...!");
	})

})

app.use(morgan('dev'));

app.listen(3000,function(error){
 
 if(error) throw error;
	console.log("Server is running on 3000 port");

})

app.get('/',function(req,res){
	var name = "Shree Swami Samartha";
	res.json("My Guru Is :- " + name);
})