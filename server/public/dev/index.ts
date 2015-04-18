/// <reference path="./interfaces.d.ts"/>

angular.module('app', [
  'ngAnimate',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ngRoute',
  'ui.codemirror',
]);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  $routeProvider.caseInsensitiveMatch = true;
  $routeProvider
    .when('/', {
      templateUrl: 'components/projectlist/projectlist.controller.tpl.html',
      controller: 'ListController',
      controllerAs:'model'
    })
    .when('/addproject', {
      templateUrl: 'components/addproject/addproject.controller.tpl.html',
      controller: 'AddProjectController',
      controllerAs:'model'
    })
    .when('/project/:projectId', {
      templateUrl: 'components/projectdetail/projectdetail.controller.tpl.html',
      controller: 'ProjectDetailController',
      controllerAs:'model'
    })
    .when('/project/:projectId/addtemplate', {
      templateUrl: 'components/addtemplate/addtemplate.controller.tpl.html',
      controller: 'AddTemplateController',
      controllerAs: 'model'
    })
    .when('/project/:projectId/template/:templateId', {
      templateUrl: 'components/templatedetail/templatedetail.controller.tpl.html',
      controller: 'TemplateDetailController',
      controllerAs: 'model'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true).hashPrefix('!');
});

