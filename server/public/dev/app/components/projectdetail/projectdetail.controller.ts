/// <reference path="./../../../interfaces.d.ts"/>
/// <reference path="./../../common/services/project.service.ts"/>

var $inject = [
  '$location',
  'ProjectService'
];

class ProjectDetailController {
  static $inject: any[];
  project: IProject;

  constructor(
    private $location,
    private projectService: ProjectService) {

    this.projectService.getProjectById('').then((project: IProject) => {
      this.project = project;
    })
  }
}

ProjectDetailController.$inject = $inject;
angular.register('app')
  .controller('ProjectDetailController', ProjectDetailController);
