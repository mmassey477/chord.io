'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  validator = require('validator'),
  generatePassword = require('generate-password'),
  owasp = require('owasp-password-strength-test'),
  path = require('path'),
  fs = require('fs'),
  config = require(path.resolve('./config/config'))

/**
 * Party Schema
 */
var PartySchema = new Schema({
  name: {
    type: String
  },
  queue: {
    type: [String],
    default: []
  }
});

mongoose.model('Party', PartySchema);

module.exports.schema = PartySchema
