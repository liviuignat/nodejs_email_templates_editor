/// <reference path="./../../../../interfaces.d.ts"/>
/// <reference path="./../../../common/services/alert.service.ts"/>
/// <reference path="./../../../common/services/project.service.ts"/>

var $inject = [
  '$location',
  '$routeParams',
  'AlertService',
  'ProjectService'
];

class ProjectLanguagesController {
  static $inject: any[];
  project: IProject;
  inserted: ILanguage = null;
  languages: ILanguage[] = [];

  constructor(
    private $location,
    private $routeParams,
    private alertService: AlertService,
    private projectService: ProjectService) {

    var projectId = this.$routeParams.projectId;

    this.projectService.getProjectById(projectId).then((project: IProject) => {
      this.project = project;
      this.languages = this.project.languages;
    });
  }

  saveProject() {
    this.projectService.udpdateProject(this.project).then(() => {
      this.alertService.showSuccessAlert('Project saved!');
    });
  }

  addLanguage() {
    var language: ILanguage = {
      key: '',
      name: ''
    };
    this.inserted = language;
    this.languages.push(language);
  }

  removeLanguage(index) {
    this.languages.splice(index, 1)
  }
}

ProjectLanguagesController.$inject = $inject;
angular.register('app')
  .controller('ProjectLanguagesController', ProjectLanguagesController);
