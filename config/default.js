var util = require('util');

var config = {
  appTitle: 'Email templates',
  isDev: true,
  server: {
    assets: '/public/.tmp',
    port: 8090
  },
  mongo: {
    url: 'mongodb://localhost:27017/emailcloud'
  }
};

module.exports = config;
