module.exports = {
  getProjects: function * () {
    return [];
  },
  getProjectById: function * (id) {
    return {};
  },
  addProject: function * (project) {
    project.id = 1;
    return project;
  },
  updateProject: function * (project) {
    return;
  },
  deleteProject: function * (project) {
    return;
  }
};
