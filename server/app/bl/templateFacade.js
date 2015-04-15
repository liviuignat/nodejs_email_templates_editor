var UnitOfWork = require('./unitOfWork');
var schema = require('./schemas');
var Template = schema.Template;

var TemplateFacade = function() {
  this.uow = new UnitOfWork();
  this.uow.connect();
};

TemplateFacade.prototype.getTemplates = function * (projectId) {
  yield this.uow.connect();
  var templates = yield Template.find({
    projectId: projectId
  });
  yield this.uow.close();
  return schema.map(templates);
};

TemplateFacade.prototype.getTemplateById = function * (id) {
  yield this.uow.connect();
  var template = yield Template.findOne({
    _id: id,
    projectId: projectId
  });
  yield this.uow.close();
  return schema.map(template);
};

TemplateFacade.prototype.addTemplate = function * (newTemplate) {
  yield this.uow.connect();
  var template = yield new Template(newTemplate).save();
  yield this.uow.close();
  return template;
};

TemplateFacade.prototype.updateTemplate = function * (template) {
  yield this.uow.connect();
  var response = yield Template.update({
    _id: template.id
  }, template);
  yield this.uow.close();
};

TemplateFacade.prototype.deleteTemplate = function * (id) {
  yield this.uow.connect();
  var response = yield Template.find({
    _id: id
  }).remove();
  yield this.uow.close();
};

module.exports = new TemplateFacade();
