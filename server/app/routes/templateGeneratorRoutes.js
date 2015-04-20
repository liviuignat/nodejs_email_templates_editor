var TemplateGeneratorService = require('./../bl/templateGeneratorService');
var templateGeneratorService = new TemplateGeneratorService();

module.exports = {
  previewSaveSession: function * () {
    var templateId = this.params.templateId;
    var json = this.request.body.json;
    var options = this.request.body.options;

    var html = yield templateGeneratorService.getHtml(templateId, json, options);

    var templatesFromSession = this.session.templates || {};
    templatesFromSession.templateId = html;
    this.session.templates = templatesFromSession;

    this.body = html;
  },

  previewFromSession: function * () {
    var templateId = this.params.templateId;
    var templatesFromSession = this.session.templates || {};
    this.body = templatesFromSession.templateId;
  },

  getHtml: function * () {
    var templateId = this.params.templateId;
    var json = this.request.body.json;
    var options = this.request.body.options;

    this.body = yield templateGeneratorService.getHtml(templateId, json, options);
  }
};
