/// <reference path="./../../../interfaces.d.ts"/>
/// <reference path="./../../common/services/template.service.ts"/>

var $inject = [
  '$location',
  'TemplateService'
];

class AddTemplateController {
  static $inject: any[];
  template: ITemplate;

  constructor(
    private $location,
    private templateService: TemplateService) {
  }

  createTemplate() {
  }
}

AddTemplateController.$inject = $inject;
angular.register('app')
  .controller('AddTemplateController', AddTemplateController);
