var util = require('util');

var config = {
  server: {
    assets: '/public/.dist',
    port: process.env.PORT || 8090
  }
};

module.exports = config;
