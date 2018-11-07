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
  res.send(authorizeURL)

};

exports.spotify = async function (req, resp) {
  console.log('Testerator');
  console.log('Query', req.body.code);
  const code = req.body.code
  const data = await spotifyApi.authorizationCodeGrant(code)
  console.log('The token expires in ' + data.body['expires_in']);
  console.log('The access token is ' + data.body['access_token']);
  console.log('The refresh token is ' + data.body['refresh_token']);

  // Set the access token on the API object to use it in later calls
  spotifyApi.setAccessToken(data.body['access_token']);
  spotifyApi.setRefreshToken(data.body['refresh_token']);

  const me = await spotifyApi.getMe()
  console.log('me', me.body);
  const user = await updateUser(me.body)

  resp.status(200).send(user)

}

async function updateUser(spotifyUser) {
  var user = await User.find(spotifyUser.id)
  if(!user){
    var user = new User(spotifyUser);
    await user.save()
  }
  return user
}