(function (angular) {
  'use strict'

  var TestComponent = {
    bindings: {
      message: '='
    },
    template: '<h1>TestComponent template {{$ctrl.message}}</h1>'
  };

  angular
    .module('TestComponentModule', [])
    .controller('TestComponentController', function ($scope) {

    })
    .component('testComponent', TestComponent);

  var appName = $('[ng-app]').attr('ng-app');
  
  angular
    .module(appName)
    .requires.push('TestComponentModule');
})(angular)
