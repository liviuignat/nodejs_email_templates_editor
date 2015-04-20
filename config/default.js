var util = require('util');

var config = {
  appTitle: 'Email templates',
  isDev: true,
  server: {
    assets: '/public/.tmp',
    port: 8090
  },
  mongo: {
    url: 'mongodb://heroku_app35875040:ds8gjmbkf4mj6j39rmv77n9jqi@ds061701.mongolab.com:61701/heroku_app35875040?replicaSet=rs-ds061701'
  }
};

module.exports = config;
