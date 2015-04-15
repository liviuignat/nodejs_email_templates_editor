var projectFacade = require('./../bl/projectFacade');

module.exports = {
  getProjects: function * () {
    this.body = yield projectFacade.getProjects();
  },
  getProjectById: function * () {
    this.body = yield projectFacade.getProjectById(this.params.id);
  },
  addProject: function * () {
    var project = this.request.body;
    var addedProject = yield projectFacade.addProject(project);

    this.status = 201;
    this.set('Location', addedProject.id);
    this.body = 'done';
  },
  updateProject: function * () {
    var project = this.request.body;
    yield projectFacade.updateProject(project);
    this.body = 'done';
  },
  deleteProject: function * () {
    yield projectFacade.deleteProject(this.params.id);
    this.body = 'done';
  }
};
