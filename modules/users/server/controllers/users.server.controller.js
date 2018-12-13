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
  var scopes = ['user-read-private', 'user-read-email', 'playlist-modify-public', 'playlist-modify-private'],
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
  req.session.user = user;
  req.session.access_token = data.body['access_token']
  resp.status(200).send(user)
}

async function updateUser(spotifyUser) {
  var user = await User.findOne({"id": spotifyUser.id})
  if(!user){
    var user = new User(spotifyUser);
    user.profileImageURL = spotifyUser.images[0].url
    await user.save()
  } else {
    user.profileImageURL = spotifyUser.images[0].url
    await user.save()
  }
  console.log("User", user)
  return user
}

exports.searchSong = async function(song, token){
  console.log('song', song);
  spotifyApi.setAccessToken(token);
  var results = await spotifyApi.searchTracks(song, {limit : 5}).then((results) => {
    console.log('results', results.body.tracks.items);
    return results.body.tracks.items;
  })
  return results
}

exports.signout = async function(req, res){
  console.log("In signout");
  console.log("req.session", req.session);
  
  await https.get('https://www.spotify.com/logout/')
  console.log("After request");
  req.logout()
  req.user = {}
  res.status(200).send()
}

exports.createPlaylist = async function(userId, partyName, token){
  console.log("userId", userId);
  spotifyApi.setAccessToken(token);
  spotifyApi.addTracksToPlaylist('2gMPq32y4eCsf62ypCJ1bh', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
  .then(function(data) {
    console.log('Added tracks to playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
}

exports.addSongToPlaylist = async function(songId){
  spotifyApi.refreshAccessToken().then(
    function(data) {
      console.log('The access token has been refreshed!');
      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.addTracksToPlaylist('2gMPq32y4eCsf62ypCJ1bh', ["spotify:track:" + songId])
      .then(function(data) {
        console.log('Retrieved playlists', data.body);
      },function(err) {
        console.log('Something went wrong!', err);
      });
      // Save the access token so that it's used in future calls
    },
    function(err) {
      console.log('Could not refresh access token', err);
    }
  );
}