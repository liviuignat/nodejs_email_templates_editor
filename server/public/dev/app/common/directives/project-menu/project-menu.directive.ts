/// <reference path="./../../../../interfaces.d.ts"/>
var $inject: string[] = [
  '$http',
  '$q',
  '$location'
];

class ProjectMenuDirective {
  static $inject: string[] = $inject;
  static $templateUrl = 'common/directives/project-menu/project-menu.directive.tpl.html';
  static $scope = {
    projectId: '=',
    activeIndex: '@'
  };

  activeIndex: number = 0;
  projectId: string;

  constructor() {
  }

  isActive(index) {
    return parseInt(<any>this.activeIndex, 10) === parseInt(index, 10);
  }

  link(scope) {
  }
}

angular.register('app')
  .directive('projectMenu', ProjectMenuDirective);
