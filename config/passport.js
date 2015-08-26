var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var LinkedInStrategy = require('passport-linkedin').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.use(new FacebookStrategy({
    clientID: '819814544764038',
    clientSecret: 'd8817a92f941ca5f80068dedd7c4a9f6',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    enableProof: false
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

passport.use(new LinkedInStrategy({
    consumerKey: '75fudvr5pz7bls',
    consumerSecret: 'Sn2KXqYfzCKGsMAk',
    callbackURL: "http://localhost:8080/auth/linkedin/callback"
  },
  function(token, tokenSecret, profile, done) {
    /* console.log('in strategy');
    User.findOrCreate({ linkedinId: profile.id }, function (err, user) {
      return done(err, user);
    }); */
    process.nextTick(function () {
      // To keep the example simple, the user's LinkedIn profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the LinkedIn account with a user record in your database,
      // and return that user instead.
      console.log(profile);
      return done(null, profile);
    });
  }
));
