var express = require('express');
var router = express.Router();
var rest = require('restler');
var async = require('async');
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('express-jwt');

var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/partials/editprofile.html', function(req, res, next) {
  res.render('partials/editprofile');
});

router.get('/partials/newsfeed.html', function(req, res, next) {
  res.render('partials/newsfeed');
});

router.get('/partials/myratings.html', function(req, res, next) {
  res.render('partials/myratings');
});

router.get('/partials/rateafriend.html', function(req, res, next) {
  res.render('partials/rateafriend');
});

router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  var user = new User();

  user.username = req.body.username;

  user.setPassword(req.body.password)

  user.save(function (err){
    if(err){ return next(err); }

    return res.json({token: user.generateJWT()})
  });
});

router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.json({status: 'success'});
  });

router.get('/auth/linkedin', passport.authenticate('linkedin'), function(req, res){

});

router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
      // Successful authentication, redirect home.
      res.jason({status: 'success'});
  });

module.exports = router;
