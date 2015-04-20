var util = require('util');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var toJsonTransform = function (doc, ret, options) {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
};
var schemaSettings = {
  transform: toJsonTransform
};

var languageSchema = new Schema({
  key: String,
  name: String
});
var layoutSchema = new Schema({
  name: String,
  layoutHtml: String
});
var projectSchema = new Schema({
  name: String,
  description: String,
  settings: {
    urlAuthority: String
  },
  layouts: [layoutSchema],
  languages: [languageSchema]
});
var templateSchema = new Schema({
  projectId: String,
  name: String,
  description: String,
  templateHtml: String,
  sampleJson: String
});

languageSchema.set('toJSON', schemaSettings);
layoutSchema.set('toJSON', schemaSettings);
projectSchema.set('toJSON', schemaSettings);
templateSchema.set('toJSON', schemaSettings);

var mapEntity = function (entity) {
  if (!entity) {
    return entity;
  }
  var json = entity.toJSON();
  return json;
};
var mapEntitiesArray = function (entities) {
  return entities.map(function (entity) {
    return mapEntity(entity);
  })
};
var map = function (entityOrArray) {
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
