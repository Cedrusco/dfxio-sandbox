(function (angular) {
  'use strict'

  // function TestComponentController(){
  //   this.message = 'cmonnn TestComponentController';
  // }

  var TestComponent = {
    bindings: {
      message: '='
    },
    // controller: TestComponentController,
    // controllerAs: '$ctrl',
    template: '<h1>TestComponent template {{$ctrl.message}}</h1>'
  };


  angular
    .module('dfxio', [])
    .controller('dfxioController', function ($scope) {
      $scope.message = "Message from dfxio controller";
    })
    .directive('dfxioDirective', function () {
      return {
        restrict: 'E',
        templateUrl: './dfxio.html'
      }
    })
    .component('testComponent', TestComponent)
})(angular)
