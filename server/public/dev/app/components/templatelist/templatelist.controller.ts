/// <reference path="./../../../interfaces.d.ts"/>
/// <reference path="./../../common/services/template.service.ts"/>

var $inject = [
  '$location',
  'TemplateService'
];

class TemplateListController {
  static $inject: any[];
  templates: ITemplate[];

  constructor(
    private $location,
    private templateService: TemplateService) {

    this.templateService.getTemplates().then((templates: ITemplate[]) => {
      this.templates = templates;
    })
  }

  selectTemplate(item) {
  }
}

TemplateListController.$inject = $inject;
angular.register('app')
  .controller('TemplateListController', TemplateListController);
