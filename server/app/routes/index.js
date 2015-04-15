var util = require('util');
var config = require('config');
var projectRoutes = require('./projectRoutes');

function setupApiRoutes(options) {
  var app = options.app;
  var prefix = options.version ? util.format('/api/%s', options.version) : '/api';

  app.get(prefix + '/project', projectRoutes.getProjects);
  app.get(prefix + '/project/:id', projectRoutes.getProjectById);
  app.post(prefix + '/project', projectRoutes.addProject);
  app.put(prefix + '/project/:id', projectRoutes.updateProject);
  app.del(prefix + '/project/:id', projectRoutes.deleteProject);
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
