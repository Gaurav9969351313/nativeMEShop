var express = require("express");
var morgan = require("morgan");
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var MongoStore = require('connect-mongo/es5')(session);
var passport = require('passport');

var ejs = require('ejs');
var engine = require('ejs-mate');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'gaurav123456',
  store: new MongoStore({ url: 'mongodb://root:sss*123@ds133044.mlab.com:33044/ecommerece', autoReconnect: true})
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.engine('ejs', engine);
app.set('view engine', 'ejs');

var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/users');

app.use(mainRoutes);
app.use(userRoutes);

//mlab gauravtalele1994 gauravtalele2015@gmail.com gauravtalele*123


mongoose.connection.openUri('mongodb://root:sss*123@ds133044.mlab.com:33044/ecommerece', function(err) {
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
