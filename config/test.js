var util = require('util');

var config = {
  isDev: false,
  server: {
    port: 8095
  },
  mongo: {
    url: 'mongodb://localhost:27017/emailcloud_tests'
  }
};

module.exports = config;
