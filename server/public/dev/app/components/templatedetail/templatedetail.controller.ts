/// <reference path="./../../../interfaces.d.ts"/>
/// <reference path="./../../common/services/template.service.ts"/>

var $inject = [
  '$location',
  'TemplateService'
];

class TemplateDetailController {
  static $inject: any[];
  template: ITemplate;

  constructor(
    private $location,
    private templateService: TemplateService) {
  }
}

TemplateDetailController.$inject = $inject;
angular.register('app')
  .controller('TemplateDetailController', TemplateDetailController);
