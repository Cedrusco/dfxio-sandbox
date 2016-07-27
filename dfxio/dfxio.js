(function (angular) {
  'use strict'

  function TestComponentController(){
    this.data = 'cmonnn';
  }

  var TestComponent = {
    bindings: {
      data: '='
    },
    controller: TestComponentController,
    controllerAs: '$ctrl',
    template: '<h1>TestComponent template {{$ctrl.data}}</h1>'
  };


  angular
    .module('dfxio', [])
    .controller('dfxioController', function ($scope) {

    })
    .directive('dfxioDirective', function () {
      return {
        restrict: 'E',
        templateUrl: './dfxio.html'
      }
    })
    .component('testComponent', TestComponent)
})(angular)
