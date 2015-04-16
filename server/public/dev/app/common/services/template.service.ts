/// <reference path="./../../../interfaces.d.ts"/>

var $inject = [
  '$q',
  '$http'
];

class TemplateService {
  static $inject: any[];

  constructor(private $q, private $http) {
  }

  getTemplates(projectId: string) {
    var deferred = this.$q.defer();
    var url = '/api/project/' + projectId + '/template';

    this.$http({
      method: 'GET',
      url: url
    }).success((data, status) => {
      if (status === 200) {
        deferred.resolve(data);
      }
      deferred.reject();
    }).error(() => {
      deferred.reject();
    }).catch(() => {
      deferred.reject();
    });

    return deferred.promise;
  }

  getTemplateById(projectId: string, templateId: string) {
    var deferred = this.$q.defer();
    var url = '/api/project/' + projectId + '/template/' + templateId;

    this.$http({
      method: 'GET',
      url: url
    }).success((data, status) => {
      if (status === 200) {
        deferred.resolve(data);
      }
      deferred.reject();
    }).error(() => {
      deferred.reject();
    }).catch(() => {
      deferred.reject();
    });

    return deferred.promise;
  }

  createTemplate(projectId: string, template: ITemplate) {
    var deferred = this.$q.defer();
    var url = '/api/project/' + projectId + '/template';

    this.$http({
      method: 'POST',
      url: url,
      data: template
    }).success((data, status) => {
      if (status === 201) {
        deferred.resolve(data);
      }
      deferred.reject();
    }).error(() => {
      deferred.reject();
    }).catch(() => {
      deferred.reject();
    });

    return deferred.promise;
  }

  udpdateTemplate(projectId: string, template: ITemplate) {
    var deferred = this.$q.defer();
    var url = '/api/project/' + projectId + '/template/' + template.id;

    this.$http({
      method: 'PUT',
      url: url,
      data: template
    }).success((data, status) => {
      if (status === 200) {
        deferred.resolve(data);
      }
      deferred.reject();
    }).error(() => {
      deferred.reject();
    }).catch(() => {
      deferred.reject();
    });

    return deferred.promise;
  }

  deleteTemplate(projectId: string, templateId: string) {
    var deferred = this.$q.defer();
    var url = '/api/project/' + projectId + '/template/' + templateId;

    this.$http({
      method: 'DELETE',
      url: url
    }).success((data, status) => {
      if (status === 200) {
        deferred.resolve(data);
      }
      deferred.reject();
    }).error(() => {
      deferred.reject();
    }).catch(() => {
      deferred.reject();
    });

    return deferred.promise;
  }
}

TemplateService.$inject = $inject;
angular.register('app')
  .service('TemplateService', TemplateService);
