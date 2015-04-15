var templateFacade = require('./../bl/templateFacade');

module.exports = {
  getTemplates: function * () {
    this.body = yield templateFacade.getTemplates(this.params.projectId);
  },
  getTemplateById: function * () {
    this.body = yield templateFacade.getTemplateById(this.params.id);
  },
  addTemplate: function * () {
    var template = this.request.body;
    var addedTemplate = yield templateFacade.addTemplate(template);

    this.status = 201;
    this.set('Location', addedTemplate.id);
    this.body = 'done';
  },
  updateTemplate: function * () {
    var templateId = this.params.id;
    var template = this.request.body;
    yield templateFacade.updateTemplate(template);
    this.body = 'done';
  },
  deleteTemplate: function * () {
    yield templateFacade.deleteTemplate(this.params.id);
    this.body = 'done';
  }
};
