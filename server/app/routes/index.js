var util = require('util');
var config = require('config');
var projectRoutes = require('./projectRoutes');
var templateRoutes = require('./templateRoutes');
var templateGeneratorRoutes = require('./templateGeneratorRoutes');

function setupApiRoutes(options) {
  var app = options.app;
  var prefix = options.version ? util.format('/api/%s', options.version) : '/api';

  app.get(prefix + '/project', projectRoutes.getProjects);
  app.get(prefix + '/project/:id', projectRoutes.getProjectById);
  app.post(prefix + '/project', projectRoutes.addProject);
  app.put(prefix + '/project/:id', projectRoutes.updateProject);
  app.del(prefix + '/project/:id', projectRoutes.deleteProject);

  app.get(prefix + '/project/:projectId/template', templateRoutes.getTemplates);
  app.get(prefix + '/project/:projectId/template/:id', templateRoutes.getTemplateById);
  app.post(prefix + '/project/:projectId/template', templateRoutes.addTemplate);
  app.put(prefix + '/project/:projectId/template/:id', templateRoutes.updateTemplate);
  app.del(prefix + '/project/:projectId/template/:id', templateRoutes.deleteTemplate);

  app.get('/template/email/preview/:templateId', templateGeneratorRoutes.previewFromSession);
  app.post(prefix + '/email/preview/:templateId', templateGeneratorRoutes.previewSaveSession);
  app.post(prefix + '/email/html/:templateId', templateGeneratorRoutes.getHtml);
}

function setupRoutes(app) {

  var index = function * () {
    yield this.render('index', {
      pageTitle: config.appTitle
    });
  };
  app.get('/', index);
  app.get('/addproject', index);
  app.get('/project/*', index);

  setupApiRoutes({
    app: app
  });

  //versioned api for future versionning support
  setupApiRoutes({
    app: app,
    version: 'v1'
  });
}

module.exports = setupRoutes;
