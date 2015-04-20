/// <reference path="./../../../../interfaces.d.ts"/>

var $inject: string[] = [];

class CodeEditorDirective {
  static $inject: string[] = $inject;
  static $templateUrl = 'common/directives/code-editor/code-editor.directive.tpl.html';
  static $scope = {
    ngModel: '=',
    options: '='
  };

  ngModel;
  options;
  defaults = {
    lineNumbers: true,
    matchBrackets: true,
    extraKeys: {
      'Enter': 'newlineAndIndentContinueComment',
      'F10': (cm) => {
        cm.setOption('fullScreen', !cm.getOption('fullScreen'));
      },
      'Esc': (cm) => {
        if (cm.getOption('fullScreen')) {
          cm.setOption('fullScreen', false);
        }
      }
    },
    theme: 'night'
  };

  constructor() {
  }

  link(scope) {
  }

  getOptions() {
    return angular.extend(this.defaults, this.options);
  }
}

angular.register('app')
    .directive('codeEditor', CodeEditorDirective);
