var mongoose = require('mongoose');
var config = require('config');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(callback) {});

var UnitOfWork = function() {};

UnitOfWork.prototype.connect = function * () {
  var url = config.mongo.url;
  mongoose.connect(url);
  this.db = mongoose.connection;
};

UnitOfWork.prototype.close = function * () {
  if (this.db) {
    this.db.close();
  }
};

module.exports = UnitOfWork;
