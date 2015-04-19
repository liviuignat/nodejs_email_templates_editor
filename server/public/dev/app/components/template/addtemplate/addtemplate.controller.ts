/// <reference path="./../../../../interfaces.d.ts"/>
/// <reference path="./../../../common/services/project.service.ts"/>
/// <reference path="./../../../common/services/template.service.ts"/>

var $inject = [
  '$location',
  '$routeParams',
  'ProjectService',
  'TemplateService'
];

class AddTemplateController {
  static $inject: any[];
  projectId: string;
  project: IProject;
  template: ITemplate;

  constructor(
    private $location,
    private $routeParams,
    private projectService: ProjectService,
    private templateService: TemplateService) {

    this.projectId = $routeParams.projectId;

    this.projectService.getProjectById(this.projectId).then((project: IProject) => {
      this.project = project;
    });
  }

  createTemplate() {
    return this.templateService.createTemplate(this.projectId, this.template).then((templateId: number) => {
      this.$location.path('/project/' + this.projectId + '/template/' + templateId);
    }).catch(() => { });
  }
}

AddTemplateController.$inject = $inject;
angular.register('app')
  .controller('AddTemplateController', AddTemplateController);
