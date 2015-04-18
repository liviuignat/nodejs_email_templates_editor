var util = require('util');

var config = {
  isDev: false,
  server: {
    assets: '/public/.dist',
    port: process.env.PORT || 8090
  },
  mongo: {
    url: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/emailcloud'
  }
};

module.exports = config;
