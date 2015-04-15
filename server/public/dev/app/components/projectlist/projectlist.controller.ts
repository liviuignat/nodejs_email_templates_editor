/// <reference path="./../../../interfaces.d.ts"/>
/// <reference path="./../../common/services/project.service.ts"/>

var $inject = [
  '$location',
  'ProjectService'
];

class ListController {
  static $inject: any[];
  projects: IProject[];

  constructor(
    private $location,
    private projectService: ProjectService) {

    this.projectService.getProjects().then((projects: IProject[]) => {
      this.projects = projects;
    })
  }

  selectProject(item) {
    this.$location.path('/project/' + item.id)
  }
}

ListController.$inject = $inject;
angular.register('app')
  .controller('ListController', ListController);
