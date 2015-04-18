/// <reference path="./../../../interfaces.d.ts"/>
/// <reference path="./../../common/services/template.service.ts"/>

var $inject = [
  '$location',
  '$routeParams',
  'AlertService',
  'ProjectService',
  'TemplateService'
];

class TemplateDetailController {
  static $inject: any[];
  project: IProject;
  template: ITemplate;
  activeTabIndex: number = 0;

  jsonEditorData: string = "";
  jsonEditorOptions = {
    lineNumbers: true,
    matchBrackets: true,
    extraKeys: {
      'Enter': 'newlineAndIndentContinueComment'
    },
    mode: {
      name: 'javascript',
      json: true
    },
    theme: 'night'
  }

  htmlEditorData: string = "";
  htmlEditorOptions = {
    lineNumbers: true,
    matchBrackets: true,
    extraKeys: {
      'Enter': 'newlineAndIndentContinueComment'
    },
    mode: {
      name: 'html'
    },
    theme: 'night'
  }

  constructor(
    private $location,
    private $routeParams,
    private alertService: AlertService,
    private projectService: ProjectService,
    private templateService: TemplateService) {

    var projectId = this.$routeParams.projectId;
    var templateId = this.$routeParams.templateId;

    this.setActive(0);

    this.projectService.getProjectById(projectId).then((project: IProject) => {
      this.project = project;
    });
    this.templateService.getTemplateById(projectId, templateId).then((template: ITemplate) => {
      this.template = template;
      this.jsonEditorData = this.template.sampleJson;
      this.htmlEditorData = this.template.templateHtml;
    });
  }

  setActive(index: number): void {
    this.activeTabIndex = index;
  }

  isActive(index: number): boolean {
    return this.activeTabIndex === index;
  }

  saveTemplate(): void {
    this.template.sampleJson = this.jsonEditorData;
    this.template.templateHtml = this.htmlEditorData;

    this.templateService.udpdateTemplate(this.project.id, this.template).then(() => {});
  }

  deleteTemplate(): void {
    var confirmText = 'Are you sure you want to delete this template and all its contents?';
    this.alertService.confirm(confirmText)
      .then(this.templateService.deleteTemplate(this.project.id, this.template.id))
      .then(() => {
        this.$location.path('/project/' + this.project.id);
      });
  }
}

TemplateDetailController.$inject = $inject;
angular.register('app')
  .controller('TemplateDetailController', TemplateDetailController);
