var util = require('util');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var languageSchema = new Schema({
  key: String,
  name: String
});

var projectSchema = new Schema({
  name: String,
  description: String,
  layoutHtml: String,
  settings: {
    urlAuthority: String
  },
  languages: [languageSchema]
});

var templateSchema = new Schema({
  projectId: String,
  name: String,
  description: String,
  templateHtml: String,
  sampleJson: String
});

var mapEntity = function(entity) {
  if (!entity) {
    return entity;
  }
  var json = entity.toJSON();
  json.id = json._id;
  delete json._id;
  return json;
};
var mapEntitiesArray = function(entities) {
  return entities.map(function(entity) {
    return mapEntity(entity);
  })
};
var map = function(entityOrArray) {
  if (!entityOrArray) {
    return entityOrArray;
  }
  var isArray = typeof entityOrArray.map === 'function';
  if (isArray) {
    return mapEntitiesArray(entityOrArray);
  } else {
    return mapEntity(entityOrArray);
  }
};

module.exports = {
  Project: mongoose.model('Project', projectSchema),
  Template: mongoose.model('Template', templateSchema),
  map: map
};
