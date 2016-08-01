angular
  .module('HelloWorldModule', [])
  .controller('HelloWorldController', function ($scope) {
    $scope.hello = function () {
      alert('hello world');
    }
  });

console.log('loaded');
dfxio();
//angular.module('Meaniscule').requires.push('HelloWorldModule');
