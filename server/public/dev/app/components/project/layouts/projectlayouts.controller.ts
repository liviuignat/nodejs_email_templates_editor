/// <reference path="./../../../../interfaces.d.ts"/>
/// <reference path="./../../../common/services/alert.service.ts"/>
/// <reference path="./../../../common/services/project.service.ts"/>

var $inject = [
  '$location',
  '$routeParams',
  'AlertService',
  'ProjectService'
];

class ProjectLayoutsController {
  static $inject: any[];
  project: IProject;
  inserted: ILayoutHtml = null;
  layouts: ILayoutHtml[] = [];

  selectedLayout: ILayoutHtml = null;
  selectedLayoutEditorOptions = {
    lineNumbers: true,
    matchBrackets: true,
    extraKeys: {
      'Enter': 'newlineAndIndentContinueComment'
    },
    mode: {
      name: 'htmlmixed'
    },
    theme: 'night'
  };

  constructor(
    private $location,
    private $routeParams,
    private alertService: AlertService,
    private projectService: ProjectService) {

    var projectId = this.$routeParams.projectId;

    this.projectService.getProjectById(projectId).then((project: IProject) => {
      this.project = project;
      this.layouts = this.project.layouts;
      this.selectedLayout = this.layouts[0];
    });
  }

  saveProject(): void {
    this.projectService.udpdateProject(this.project).then(() => {
      this.alertService.showSuccessAlert('Project saved!');
    });
  }

  addLayout(): void {
    var layout: ILayoutHtml = {
      name: '',
      layoutHtml: ''
    };
    this.inserted = layout;
    this.layouts.push(layout);
  }

  removeLayout(index): void {
    this.layouts.splice(index, 1)
  }

  isLayoutSelected(layout: ILayoutHtml): boolean {
    return layout === this.selectedLayout;
  }

  selectLayout(layout: ILayoutHtml): void {
    this.selectedLayout = layout;
  }

  showActionButtons(layout: ILayoutHtml): boolean {
    return layout.name !== 'default';
  }
}

ProjectLayoutsController.$inject = $inject;
angular.register('app')
  .controller('ProjectLayoutsController', ProjectLayoutsController);
