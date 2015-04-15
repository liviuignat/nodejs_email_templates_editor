/// <reference path="./../../../interfaces.d.ts"/>

var $inject = [
  '$q',
  '$http'
];

class ProjectService {
  static $inject: any[];

  constructor(private $q, private $http) {
  }

  getProjects() {
    return this.$q.when([]);
  }

  getProjectById(projectId: string) {
    return this.$q.when({});
  }

  addProject(project: IProject) {
    return this.$q.when();
  }

  udpdateProject(project: IProject) {
    return this.$q.when();
  }

  deleteProject(projectId: string) {
    return this.$q.when();
  }
}

ProjectService.$inject = $inject;
angular.register('app')
  .service('ProjectService', ProjectService);
