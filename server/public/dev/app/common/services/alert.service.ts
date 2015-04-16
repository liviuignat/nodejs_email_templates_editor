/// <reference path="./../../../interfaces.d.ts"/>

var $inject = [
  '$q'
];

class AlertService {
  static $inject: any[] = $inject;

  constructor(private $q) {}

  confirm(text: string) {
    var deferred = this.$q.defer();
    bootbox.confirm(text, (result) => {
      if(result) {
        return deferred.resolve();
      }
      return deferred.reject();
    });
    return deferred.promise;
  }
}

angular.register('app')
  .service('AlertService', AlertService);
