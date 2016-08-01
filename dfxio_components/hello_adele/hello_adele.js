angular
  .module('HelloAdeleModule', [])
  .controller('HelloAdeleController', function ($scope) {
    $scope.hello = function () {
      alert('hello adele');
    }

  });