var q = require('q');
var schema = require('./schemas');
var Project = schema.Project;

var ProjectFacade = function() {};

ProjectFacade.prototype.getProjects = function * () {
  var projects = yield Project.find();
  return schema.map(projects);
};

ProjectFacade.prototype.getProjectById = function * (id) {
  var project = yield Project.findOne({
    _id: id
  });
  return schema.map(project);
};

ProjectFacade.prototype.addProject = function * (newProject) {
  var project = yield new Project(newProject).save();
  return project;
};

ProjectFacade.prototype.updateProject = function * (project) {
  var response = yield Project.update({
    _id: project.id
  }, project);
};

ProjectFacade.prototype.deleteProject = function * (id) {
  var response = yield Project.find({
    _id: id
  }).remove();
};

module.exports = new ProjectFacade();
