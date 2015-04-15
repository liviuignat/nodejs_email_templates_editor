var Server = require('./../server').Server;
var q = require('q');
var config = require('config');
var supertest = require('co-supertest');
var MongoClient = require('mongodb').MongoClient

module.exports = {
  cleanDb: function() {
    var deferred = q.defer();
    var url = config.mongo.url;

    MongoClient.connect(url, function(err, db) {
      db.dropDatabase();
      deferred.resolve();
    });

    return deferred.promise;
  },
  getRequest: function * () {
    var server = new Server({
        dirname: './'
      })
      .init()
      .setupRoutes()
      .start();

    var app = server.app;

    return supertest.agent(app.listen());
  }
}
