/// <reference path="./../../../interfaces.d.ts"/>

var $inject = [
  '$q',
  '$http'
];

class ProjectService {
  static $inject: any[];

  constructor(private $q, private $http) {
  }

  getProjects() {
    var deferred = this.$q.defer();
    var url = '/api/project';

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

  getProjectById(projectId: string) {
    var deferred = this.$q.defer();
    var url = '/api/project/' + projectId;

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

  createProject(project: IProject) {
    var deferred = this.$q.defer();
    var url = '/api/project';

    this.$http({
      method: 'POST',
      url: url,
      data: project
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

  udpdateProject(project: IProject) {
    var deferred = this.$q.defer();
    var url = '/api/project/' + project.id;

    this.$http({
      method: 'PUT',
      url: url,
      data: project
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

  deleteProject(projectId: string) {
    var deferred = this.$q.defer();
    var url = '/api/project/' + projectId;

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

ProjectService.$inject = $inject;
angular.register('app')
  .service('ProjectService', ProjectService);
