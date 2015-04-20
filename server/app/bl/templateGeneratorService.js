var ejs = require('ejs');
var ProjectFacade = require('./projectFacade');
var TemplateFacade = require('./templateFacade');

var TemplateGeneratorService = function () {
  this.projectFacade = new ProjectFacade();
  this.templateFacade = new TemplateFacade();
};

TemplateGeneratorService.prototype.getLayout = function * (project, layoutId) {
  var layout;
  if (layoutId) {
    layout = project.layouts.filter(function (layout) {
      if(!layout) {
        return false;
      }
      return layout.id.toString() === layoutId;
    })[0];
  }

  if (layout) {
    return layout;
  }

  layout = project.layouts.filter(function (layout) {
    return layout.name === 'default';
  })[0];

  return layout;
};

TemplateGeneratorService.prototype.getTemplate = function * (templateId, options) {
  var layoutId = options.layoutId;

  var template = yield this.templateFacade.getTemplateById(templateId);
  if (!template) {
    throw 'No template found for id ' + templateId;
  }

  var project = yield this.projectFacade.getProjectById(template.projectId);
  if (!project) {
    throw 'No project found for id ' + template.projectId;
  }

  var layout = yield this.getLayout(project, layoutId);
  var layoutHtml = layout.layoutHtml;

  var emailTemplate = layoutHtml.replace('<!--CONTENT-->', template.templateHtml);

  return emailTemplate;
};

TemplateGeneratorService.prototype.getHtml = function * (templateId, json, options) {
  var template = yield this.getTemplate(templateId, options);
  var modelToBind = {
    urlAuthority: 'www.google.com', //TODO add to settings somewhere
    model: json
  };
  var html = ejs.render(template, modelToBind);
  return html;
};

module.exports = TemplateGeneratorService;
