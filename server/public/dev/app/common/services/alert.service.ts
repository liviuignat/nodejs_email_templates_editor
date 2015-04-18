/// <reference path="./../../../interfaces.d.ts"/>

var $inject = [
  '$q',
  '$alert'
];

class AlertService {
  static $inject: any[] = $inject;

  constructor(private $q, private $alert) { }

  showErrorAlert(message: string) {
    this.$alert({
      title: 'Error',
      content: message,
      placement: 'top-right',
      type: 'warning',
      duration: 10,
      show: true
    });
  }

  showSuccessAlert(message: string) {
    this.$alert({
      title: 'Done',
      content: message,
      placement: 'top-right',
      type: 'success',
      duration: 10,
      show: true
    });
  }

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
