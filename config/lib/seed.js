'use strict';

var _ = require('lodash'),
  config = require('../config'),
  mongoose = require('mongoose'),
  chalk = require('chalk'),
  crypto = require('crypto');

// global seed options object
var seedOptions = {};

function removeUser (user) {
  return new Promise(function (resolve, reject) {
    var User = mongoose.model('User');
    User.find({ username: user.username }).remove(function (err) {
      if (err) {
        reject(new Error('Failed to remove local ' + user.username));
      }
      resolve();
    });
  });
}

function saveUser (user) {
  return function() {
    return new Promise(function (resolve, reject) {
      // Then save the user
      user.save(function (err, theuser) {
        if (err) {
          reject(new Error('Failed to add local ' + user.username));
        } else {
          resolve(theuser);
        }
      });
    });
  };
}

function checkUserNotExists (user) {
  return new Promise(function (resolve, reject) {
    var User = mongoose.model('User');
    User.find({ username: user.username }, function (err, users) {
      if (err) {
        reject(new Error('Failed to find local account ' + user.username));
      }

      if (users.length === 0) {
        resolve();
      } else {
        reject(new Error('Failed due to local account already exists: ' + user.username));
      }
    });
  });
}

function reportSuccess (password) {
  return function (user) {
    return new Promise(function (resolve, reject) {
      if (seedOptions.logResults) {
        console.log(chalk.bold.red('Database Seeding:\t\t\tLocal ' + user.username + ' added with password set to ' + password));
      }
      resolve();
    });
  };
}

function seedUserRootFolder (user) {
  var Folder = mongoose.model('Folder');
  // create a root folder for the user to hold all their future folders
  var rootFolder = new Folder({
    title: 'root',
    user: user,
    type: 'root'
  })

  return rootFolder.save()
    .then(function() {
      user.rootFolder = rootFolder._id;
      if (user.username === 'testbot') {

        // testBot needs a couple more folders to work properly.
        var folders = [
          new Folder({
            title: 'tests',
            user: user,
            parent: rootFolder._id
          }).save(),
          new Folder({
            title: 'test models',
            user: user,
            parent: rootFolder._id
          }).save()
        ]

        return Promise.all(folders)
      } else {
        return resolve();
      }
    });
}

// save the specified user with the password provided from the resolved promise
function seedTheUser (user) {
  return function (password) {
    return new Promise(function (resolve, reject) {

      var User = mongoose.model('User');
      // set the new password
      user.password = password;

      // only seed user if it doesn't already exist
      // to reseed new users instead swap line "checkUserNotExists(user)" with "removeUser(user)"
      checkUserNotExists(user)
        .then(seedUserRootFolder(user))
        .then(saveUser(user))
        .then(reportSuccess(password))
        .then(function () {
          resolve();
        })
        .catch(function (err) {
          reject(err);
        });

    });
  };
}

// report the error
function reportError (reject) {
  return function (err) {
    if (seedOptions.logResults) {
      console.log();
      console.log('Database Seeding:\t\t\t' + err);
      console.log();
    }
    reject(err);
  };
}

module.exports.start = function start(options) {
  // Initialize the default seed options
  seedOptions = _.clone(config.seedDB.options, true);

  // Check for provided options

  if (_.has(options, 'logResults')) {
    seedOptions.logResults = options.logResults;
  }

  if (_.has(options, 'seedUser')) {
    seedOptions.seedUser = options.seedUser;
  }

  if (_.has(options, 'seedAdmin')) {
    seedOptions.seedAdmin = options.seedAdmin;
  }

  if (_.has(options, 'seedTestBot')) {
    seedOptions.seedTestBot = options.seedTestBot;
  }

  var User = mongoose.model('User');
  return new Promise(function (resolve, reject) {

    var adminAccount = new User(seedOptions.seedAdmin);
    var userAccount = new User(seedOptions.seedUser);
    var testBotAccount = new User(seedOptions.seedTestBot);


    // seed admin, user, and testBot
    // only seed accounts if they do not exist
    User.generateRandomPassphrase()
      .then(seedTheUser(testBotAccount))
      .then(User.generateRandomPassphrase)
      .then(seedTheUser(userAccount))
      .then(User.generateRandomPassphrase)
      .then(seedTheUser(adminAccount))
      .then(function () {
        resolve();
      })
      .catch(reportError(reject));    

  });
};
