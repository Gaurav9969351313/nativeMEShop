var router = require('express').Router();


router.get('/',function(req,res){
	//var name = "Shree Swami Samartha";
	//res.json("My Guru Is :- " + name);
	res.render('main/home')
})


router.get('/about',function(req,res){
	//var name = "Shree Swami Samartha";
	//res.json("My Guru Is :- " + name);
	res.render('about')
})

module.exports = router;