var express = require('express');
var router = express.Router();
var rest = require('restler');
var async = require('async');
var mongoose = require('mongoose');
var passport = require('passport');

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

router.get('/partials/login.html', function(req, res, next) {
  res.render('partials/login');
});

router.get('/auth/facebook', function(req, res, next){
  res.redirect('http://localhost:8080/auth/facebook');
});
/*
router.get('/profile', function(req, res, next){
  res.json({text: 'success'});
});

router.get('/profilefb', function(req, res, next){
  res.json({text: 'success'});
});

router.get('/errorfb', function(req, res, next){
  res.json({text: 'failure fb'});
});

router.get('/errorli', function(req, res, next){
  res.json({text: 'failure li'});
});

router.get('/signup', function(req, res, next){
  res.json({text: 'failure signup'});
});

router.get('/login', function(req, res, next){
  res.json({text: 'failure login'});
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
    successRedirect : '/profile',
    failureRedirect : '/login'
}));

router.get('/auth/linkedin', passport.authenticate('linkedin'));

router.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', { failureRedirect: '/errorli' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/profile');
});

// route for logging out
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
*/
module.exports = router;
