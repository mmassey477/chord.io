'use strict';

var path = require('path'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  mongoose = require('mongoose'),
  passport = require('passport'),
  User = mongoose.model('User'),
  https = require('https'),
  SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: process.env.SPOTIFY_URI
});


exports.signin = function (req, res, next) {
  var scopes = ['user-read-private', 'user-read-email'],
  redirectUri = process.env.SPOTIFY_URI,
  clientId = process.env.SPOTIFY_CLIENT_ID

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
  var spotifyApi = new SpotifyWebApi({
    redirectUri: redirectUri,
    clientId: clientId
  });

  // Create the authorization URL
  var authorizeURL = spotifyApi.createAuthorizeURL(scopes);
  console.log('Author', authorizeURL);
  res.send(authorizeURL)

  var code = "AQAc8Two-5StwpdDymZEJbo9K9q_djAe0Vh99Ox4KI92Z7bghg6pduvcQflpZbn8dhvJgd3DtI9rtCyT7m1IwPQwLXih3ytzgPqls4IYP0i4q-5SAYZbLk94S2WZWtfQ43-WtLMGE143gpT2iWcnFhQVfziidZYGx87WWeQHx0ZTtpJ28ei4aj4xeNUxZsgvMetmrlfjHMlsO64fnwC5exKcjVoDJ1dPZYTryX_iWBE-RoxIMYXIBYWa7w"

  spotifyApi.authorizationCodeGrant(code).then(
    function(data) {
      console.log('The token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      console.log('The refresh token is ' + data.body['refresh_token']);
  
      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.setRefreshToken(data.body['refresh_token']);
    },
    function(err) {
      console.log('Something went wrong!', err);
    }
  );

};