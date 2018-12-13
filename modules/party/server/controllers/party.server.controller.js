'use strict'
var mongoose = require('mongoose'),
    Party = mongoose.model('Party'),
    path = require('path'),
    { searchSong, createPlaylist, addSongToPlaylist } = require(path.resolve('./modules/users/server/controllers/users.server.controller.js'))

exports.newParty = async function(req, res){
    var options = req.body;
    console.log('optionss', options);
    createPlaylist(req.session.user.id, options.name, req.session.access_token)
    var party = new Party(options);
    await party.save()
    res.status(200).send(party)
}

exports.searchSong = async function(req, res){
    var song = req.body
    var query = song.text
    console.log('Query', query);
    var results = await searchSong(query, req.session.access_token)
    console.log('results', results);
    res.status(200).send({"results": results})
}

exports.searchParty = async function(req, res){
    console.log("Testt");
    
    var partyName = req.body
    console.log("Party Name", partyName);
    
    var party = await Party.findOne(partyName)
    if(party){
        res.status(200).send(party)
    } else {
        res.status(200).send()
    }
}

exports.addToQueue = async function(req, res){
    var song = req.body.song
    var partyName = req.body.partyName
    //console.log("Soner", song)
    console.log("partyName", partyName)
    var party = await Party.update({name: partyName}, {$push: {queue: song.name + " by " + song.artists[0].name}})
    if(req.session.user.id == 'mitchmassey1'){
        addSongToPlaylist(song.id)
    }
    res.status(200).send({response: "Added to queue"})
}

exports.getParty = async function(req, res){
    console.log("In herre", req.params.partyId);
    
    var party = await Party.findOne(req.params.partyId)
    if(party){
        console.log("Got dat party", party);
        
        res.status(200).send(party)
    } else {
        res.status(400).send()
    }
}