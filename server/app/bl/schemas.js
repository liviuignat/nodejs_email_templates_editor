var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name: String,
  description: String
});

var templateSchema = new Schema({
  projectId: String,
  name: String,
  description: String,
  templateHtml: String,
  sampleJson: String
});

module.exports = {
  Project: mongoose.model('Project', projectSchema),
  Template: mongoose.model('Template', templateSchema)
};
