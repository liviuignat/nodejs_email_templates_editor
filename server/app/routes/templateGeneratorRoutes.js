var TemplateGeneratorService = require('./../bl/templateGeneratorService');
var templateGeneratorService = new TemplateGeneratorService();

module.exports = {
  previewSaveSession: function * () {
    var templateId = this.params.templateId;
    var json = this.request.body.json;
    var options = this.request.body.options;

    var previewOptions = this.session.previewOptions || {};
    previewOptions.templateId = this.request.body;
    this.session.previewOptions = previewOptions;

    this.body = previewOptions;
  },

  previewFromSession: function * () {
    var templateId = this.params.templateId;
    var previewOptions = this.session.previewOptions.templateId;
    var json = previewOptions.json;
    var options = previewOptions.options;

    var html = yield templateGeneratorService.getHtml(templateId, json, options);

    this.body = html;
  },

  getHtml: function * () {
    var templateId = this.params.templateId;
    var json = this.request.body.json;
    var options = this.request.body.options;

    this.body = yield templateGeneratorService.getHtml(templateId, json, options);
  },

  sendEmail: function * () {
    var templateId = this.params.templateId;
    var json = this.request.body.json;
    var options = this.request.body.options;

    var html = yield templateGeneratorService.getHtml(templateId, json, options);

    this.body = 'done';
  }
};
