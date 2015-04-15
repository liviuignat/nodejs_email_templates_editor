angular.module('app', [
  'ngAnimate',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ngRoute']);

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
    .when('/project/:id', {
      templateUrl: 'components/projectdetail/projectdetail.controller.tpl.html',
      controller: 'ProjectDetailController',
      controllerAs:'model'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true).hashPrefix('!');
});

