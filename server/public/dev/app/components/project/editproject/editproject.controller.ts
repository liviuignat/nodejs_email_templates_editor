/// <reference path="./../../../../interfaces.d.ts"/>
/// <reference path="./../../../common/services/alert.service.ts"/>
/// <reference path="./../../../common/services/project.service.ts"/>

var $inject = [
  '$location',
  '$routeParams',
  'AlertService',
  'ProjectService'
];

class EditProjectController {
  static $inject: any[];
  project: IProject;

  constructor(
    private $location,
    private $routeParams,
    private alertService: AlertService,
    private projectService: ProjectService) {

    var projectId = this.$routeParams.projectId;

    this.projectService.getProjectById(projectId).then((project: IProject) => {
      this.project = project;
    });
  }

  saveProject() {

    this.projectService.udpdateProject(this.project).then(() => {
      this.alertService.showSuccessAlert('Project saved!');
    });
  }

  deleteProject() {
    var confirmText = 'Are you sure you want to delete this project and all its contents?';
    this.alertService.confirm(confirmText).then(() => {
      return this.projectService.deleteProject(this.project.id);
    }).then(() => {
      this.$location.path('/');
    });
  }
}

EditProjectController.$inject = $inject;
angular.register('app')
    .controller('EditProjectController', EditProjectController);
