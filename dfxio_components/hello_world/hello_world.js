angular
  .module('HelloWorldModule', [])
  .controller('HelloWorldController', function ($scope) {
    $scope.hello = function () {
      alert('hello world');
    }
  });

// angular.module('Meaniscule').requires.push('HelloWorldModule');
