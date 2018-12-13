'use strict';

/**
 * Module dependencies
 */
var passport = require('passport');

module.exports = function (app) {
  // User Routes
  var party = require('../controllers/party.server.controller');

  app.route('/api/party/newParty').post(party.newParty);

  app.route('/api/party/searchParty').post(party.searchParty);

  app.route('/api/party/searchSong').post(party.searchSong);

  app.route('/api/party/addToQueue').post(party.addToQueue);

  app.route('/api/party/:partyId').get(party.getParty)

};
