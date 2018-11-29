'use strict';

/**
 * Module dependencies.
 */
var config = require('../config'),
  mongoose = require('./mongoose'),
  express = require('./express'),
  chalk = require('chalk'),
  seed = require('./seed')

var app = require('express')();
var http = require('http').Server(app);

function seedDB() {
  if (config.seedDB && config.seedDB.seed) {
    console.log(chalk.bold.red('Warning:  Database seeding is turned on'));
    seed.start();
  }
}

// Initialize Models
mongoose.loadModels(seedDB);

module.exports.loadModels = function loadModels() {
  mongoose.loadModels();
};

module.exports.init = function init(callback) {

  var mongooseOptions = {
    server: {
      socketOptions: {
        keepAlive: 300000,
        connectTimeoutMS: 30000
      }
    },
    replset: {
      socketOptions: {
        keepAlive: 300000,
        connectTimeoutMS: 30000
      }
    }
  };

  mongoose.connect(function (db) {
    // Initialize express
    var app = express.init(db);
    if (callback) callback(app, db, config);

  }, mongooseOptions);
};

module.exports.start = function start(callback) {
  var _this = this;

  _this.init(function (app, db, config) {

    // Start the app by listening on <port> at <host>
    var server = app.listen(config.port, config.host, function () {
      // Create server URL
      var server = (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + config.host + ':' + config.port;
      // Logging initialization
      console.log();
      console.log('      =IY;')           
      console.log('      XRVRRi')          
      console.log('     =Ri :RR')          
      console.log('     VR  ;RR')          
      console.log('     RY  tRY')          
      console.log('     RX ;RR;')          
      console.log('     tR=RRR')           
      console.log('     ;RRRR;')           
      console.log('     ;RRRi')            
      console.log('    ;RRRV')             
      console.log('   ;RRRRR:')            
      console.log('  :RRRV.RX')            
      console.log('  VRRR: ;R=')           
      console.log(' =RRR+   YRitti;.')     
      console.log(' VRRR  :YRRRRRRRRt.')   
      console.log('.RRRY ;RRYYR;;iRRRR.')  
      console.log(':RRRi RR; .Rt  .XRRY')  
      console.log(':RRR= RV   +R.  .RRR')  
      console.log(':RRRt tR    Rt   IRR.') 
      console.log(' RRRR  ;;   +R.  XRY')  
      console.log(' ;RRRt      .R+ +RR:')  
      console.log('  ;RRRX;     YRIRX:')   
      console.log('   .+RRRRIiitRRY;')     
      console.log('      :;+ii+;tR:')      
      console.log('             ;R:')      
      console.log('             iR')       
      console.log('    ;VRRi    Vi')       
      console.log('    RRRRR.  tR.')       
      console.log('    YRRR+ ;YV:')        
      console.log('    .tRRRRR+')          
      console.log('      .;;:')
      console.log('--');
      console.log(chalk.green(config.app.title));
      console.log();
      console.log(chalk.green('Environment:     ' + process.env.NODE_ENV));
      console.log(chalk.green('Server:          ' + server));
      console.log(chalk.green('Database:        ' + config.db.uri));
      console.log('--');

      if (callback) callback(app, db, config);
    });
    var io = require('socket.io')(server);
    console.log(io);
    io.on('connection', function(socket){

      socket.on("new song", function(song){
        socket.broadcast.emit("new song", song)
      })

      socket.emit("message", "It worked");
      console.log('a user connected');
    });
    server.timeout = 5 * 60 * 1000 // 5 minutes (up from default 2)

  });

};
