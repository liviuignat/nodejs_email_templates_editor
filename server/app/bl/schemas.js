var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name: String,
  description: String
});

module.exports = {
  Project: mongoose.model('Project', projectSchema)
};
