var schema = require('./schemas');
var Template = schema.Template;

var TemplateFacade = function() {};

TemplateFacade.prototype.getTemplates = function * (projectId) {
  var templates = yield Template.find({
    projectId: projectId
  });
  return schema.map(templates);
};

TemplateFacade.prototype.getTemplateById = function * (id) {
  var template = yield Template.findOne({
    _id: id
  });
  return schema.map(template);
};

TemplateFacade.prototype.addTemplate = function * (newTemplate) {
  var template = yield new Template(newTemplate).save();
  return template;
};

TemplateFacade.prototype.updateTemplate = function * (template) {
  var response = yield Template.update({
    _id: template.id
  }, template);
};

TemplateFacade.prototype.deleteTemplate = function * (id) {
  var response = yield Template.find({
    _id: id
  }).remove();
};

TemplateFacade.prototype.getFormattedTemplate = function * (templateId, json) {
  var template = yield this.getTemplateById(templateId);
  var layoutHtml = '<!--CONTENT-->';
  var emailTemplate = layoutHtml.replace('<!--CONTENT-->', emailHtml);
  var modelToBind = {
    urlAuthority: config.emails.urlAuthority,
    model: model
  };
};

module.exports = new TemplateFacade();
