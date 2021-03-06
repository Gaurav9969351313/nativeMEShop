var router = require('express').Router();
var User = require('../models/user');
var passport = require('passport');
var passportConf = require('../config/passport');




router.get('/login', function(req, res) {
  if (!req.user) return res.redirect('/');
  res.render('accounts/login', { message: req.flash('loginMessage')});
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

// router.get('/profile', function(req, res, next) {

// 	res.send(req.user);
// });


router.get('/profile', function(req, res, next) {
	User.findOne({ _id: req.user._id },function(err,user){
		if(err) return next(err);
		res.render('accounts/profile',{ user : user });
	});
});


router.get('/signup', function(req, res, next) {
  res.render('accounts/signup', { errors: req.flash('errors') }); //
});

router.post('/signup',function(req,res,next){
	//while testing it on postman use xxx-urlencoded body to send
	var user = new User();
	user.profile.name = req.body.name;
	user.password = req.body.password;
	user.email = req.body.email;

	 User.findOne({ email: req.body.email }, function(err, existingUser) {

        if (existingUser) {
        	req.flash('errors','Account with that email address already exists');
         // console.log('Account with that email address already exists');
          return res.redirect('/signup');
        } else {
          user.save(function(err, user) {
            if (err) return next(err);
            //callback(null, user);
           // res.json("user Created Sucessfully...!");
           return res.redirect('/');
          });
        }
      });
})

module.exports = router;