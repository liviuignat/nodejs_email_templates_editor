/// <reference path="./interfaces.d.ts"/>

angular.module('app', [
  'ngAnimate',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ngRoute',
  'mgcrea.ngStrap',
  'xeditable',
  'ui.codemirror',
]);

angular.module('app').run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

angular.module('app').config(function ($routeProvider, $locationProvider) {
  $routeProvider.caseInsensitiveMatch = true;
  $routeProvider
    .when('/', {
      templateUrl: 'components/project/projectlist/projectlist.controller.tpl.html',
      controller: 'ListController',
      controllerAs:'model'
    })
    .when('/addproject', {
      templateUrl: 'components/project/addproject/addproject.controller.tpl.html',
      controller: 'AddProjectController',
      controllerAs:'model'
    })
    .when('/project/:projectId', {
      templateUrl: 'components/project/projectdetail/projectdetail.controller.tpl.html',
      controller: 'ProjectDetailController',
      controllerAs:'model'
    })
    .when('/project/:projectId/edit', {
      templateUrl: 'components/project/editproject/editproject.controller.tpl.html',
      controller: 'EditProjectController',
      controllerAs: 'model'
    })
    .when('/project/:projectId/layouts', {
      templateUrl: 'components/project/layouts/projectlayouts.controller.tpl.html',
      controller: 'ProjectLayoutsController',
      controllerAs: 'model'
    })
    .when('/project/:projectId/languages', {
      templateUrl: 'components/project/languages/projectlanguages.controller.tpl.html',
      controller: 'ProjectLanguagesController',
      controllerAs: 'model'
    })
    .when('/project/:projectId/addtemplate', {
      templateUrl: 'components/template/addtemplate/addtemplate.controller.tpl.html',
      controller: 'AddTemplateController',
      controllerAs: 'model'
    })
    .when('/project/:projectId/template/:templateId', {
      templateUrl: 'components/template/templatedetail/templatedetail.controller.tpl.html',
      controller: 'TemplateDetailController',
      controllerAs: 'model'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true).hashPrefix('!');
});

