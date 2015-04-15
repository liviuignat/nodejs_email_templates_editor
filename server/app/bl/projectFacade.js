var q = require('q');
var UnitOfWork = require('./unitOfWork');
var schema = require('./schemas');
var Project = schema.Project;

var ProjectFacade = function() {
  this.uow = new UnitOfWork();
  this.uow.connect();
};

ProjectFacade.prototype.getProjects = function * () {
  return [];
};

ProjectFacade.prototype.getProjectById = function * (id) {
  return {};
};

ProjectFacade.prototype.addProject = function * (newProject) {
  yield this.uow.connect();
  var project = yield new Project(newProject).save();
  yield this.uow.close();
  return project;
};

ProjectFacade.prototype.updateProject = function * (project) {
  return;
};

ProjectFacade.prototype.deleteProject = function * (project) {
  return;
};

module.exports = new ProjectFacade();
