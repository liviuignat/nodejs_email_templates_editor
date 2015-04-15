var util = require('util');

var config = {
  isDev: false,
  server: {
    assets: '/public/.dist',
    port: process.env.PORT || 8090
  },
  mongo: {
    url: node.env.MONGOLAB_URI
  }
};

module.exports = config;
