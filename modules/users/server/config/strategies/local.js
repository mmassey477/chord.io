'use strict';

/**
 * Module dependencies
 */
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('mongoose').model('User');

module.exports = function () {
  // Use local strategy
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
      console.log('emailer', email);
    User.findOne({
        email: usernameOrEmail.toLowerCase()
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      return done(null, user);
    });
  }));
};