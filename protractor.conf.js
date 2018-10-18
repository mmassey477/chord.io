
const request = require('request')

// const host = 'http://application:8443'
const host = 'http://localhost:8443'
// Protractor configuration
const config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['modules/*/tests/e2e/*.js'],
  params: {
    host
  },
  multiCapabilities: [{
    browserName: 'firefox'
  }]
};


exports.config = config;
