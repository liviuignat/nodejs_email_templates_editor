var mongoose = require('mongoose');
var config = require('config');

var UnitOfWork = function() {};

UnitOfWork.prototype.connect = function * () {
  var url = config.mongo.url;
  mongoose.connect(url);
  this.db = mongoose.connection;
  this.db.on('error', console.error.bind(console, 'connection error:'));
  this.db.once('open', function(callback) {});
};

UnitOfWork.prototype.close = function * () {
  if (this.db) {
    this.db.close();
  }
};

module.exports = UnitOfWork;
