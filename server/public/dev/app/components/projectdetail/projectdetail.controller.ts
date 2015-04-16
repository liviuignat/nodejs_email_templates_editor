/// <reference path="./../../../interfaces.d.ts"/>
/// <reference path="./../../common/services/alert.service.ts"/>
/// <reference path="./../../common/services/project.service.ts"/>
/// <reference path="./../../common/services/template.service.ts"/>

var $inject = [
  '$location',
  '$routeParams',
  'AlertService',
  'ProjectService',
  'TemplateService'
];

class ProjectDetailController {
  static $inject: any[];
  projectId: string;
  project: IProject;
  templates: ITemplate[];

  constructor(
    private $location,
    private $routeParams,
    private alertService: AlertService,
    private projectService: ProjectService,
    private templateService: TemplateService) {

    this.projectId = this.$routeParams.id;

    this.projectService.getProjectById(this.projectId).then((project: IProject) => {
      this.project = project;
    });
    this.templateService.getTemplates(this.projectId).then((templates: ITemplate[]) => {
      this.templates = templates;
    });
  }

  addTemplate() {
  }

  selectTemplate(template: ITemplate) {
  }

  deleteProject() {
    var confirmText = 'Are you sure you want to delete this project and all its contents?';
    this.alertService.confirm(confirmText)
      .then(this.projectService.deleteProject(this.projectId))
      .then(() => {
        this.$location.path('/');
      });
  }
}

ProjectDetailController.$inject = $inject;
angular.register('app')
  .controller('ProjectDetailController', ProjectDetailController);
