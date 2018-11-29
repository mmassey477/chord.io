'use strict'
var mongoose = require('mongoose'),
    Party = mongoose.model('Party'),
    path = require('path'),
    { searchSong } = require(path.resolve('./modules/users/server/controllers/users.server.controller.js'))

exports.newParty = async function(req, res){
    var options = req.body;
    console.log('optionss', options);
    var party = new Party(options);
    await party.save()
    res.status(200).send()
}

exports.searchSong = async function(req, res){
    var song = req.body
    var query = song.text
    console.log('Query', query);
    var results = await searchSong(query, req.session.access_token)
    console.log('results', results);
    res.status(200).send({"results": results})
}