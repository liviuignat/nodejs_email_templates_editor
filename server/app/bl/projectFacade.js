var q = require('q');
var schema = require('./schemas');
var Project = schema.Project;
var Template = schema.Template;

var ProjectFacade = function () {};

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
  newProject.layouts = [{
    name: 'default',
    layoutHtml: '<html>\n  <head>\n  <\/head>\n  <body>\n    <!--CONTENT-->\n  <\/body>\n<\/html>'
  }];

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
  var responseTemplates = yield Template.find({
    projectId: id
  }).remove();
};

module.exports = ProjectFacade;
