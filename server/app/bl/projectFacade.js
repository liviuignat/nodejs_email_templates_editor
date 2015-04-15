var q = require('q');
var UnitOfWork = require('./unitOfWork');
var schema = require('./schemas');
var Project = schema.Project;

var ProjectFacade = function() {
  this.uow = new UnitOfWork();
  this.uow.connect();
};

ProjectFacade.prototype.getProjects = function * () {
  yield this.uow.connect();
  var projects = yield Project.find();
  yield this.uow.close();
  return schema.map(projects);
};

ProjectFacade.prototype.getProjectById = function * (id) {
  yield this.uow.connect();
  var project = yield Project.findOne({
    _id: id
  });
  yield this.uow.close();
  return schema.map(project);
};

ProjectFacade.prototype.addProject = function * (newProject) {
  yield this.uow.connect();
  var project = yield new Project(newProject).save();
  yield this.uow.close();
  return project;
};

ProjectFacade.prototype.updateProject = function * (project) {
  yield this.uow.connect();
  var response = yield Project.update({
    _id: project.id
  }, project);
  yield this.uow.close();
};

ProjectFacade.prototype.deleteProject = function * (id) {
  yield this.uow.connect();
  var response = yield Project.find({
    _id: id
  }).remove();
  yield this.uow.close();
};

module.exports = new ProjectFacade();
