/// <reference path="./../../../interfaces.d.ts"/>
/// <reference path="./../../common/services/project.service.ts"/>

var $inject = [
  '$location',
  'ProjectService'
];

class AddProjectController {
  static $inject: any[];
  project: IProject;

  constructor(
    private $location,
    private projectService: ProjectService) {
  }

  createProject() {
    return this.projectService.createProject(this.project).then(() => {
      this.$location.path('/');
    }).catch(() => {});
  }
}

AddProjectController.$inject = $inject;
angular.register('app')
  .controller('AddProjectController', AddProjectController);
