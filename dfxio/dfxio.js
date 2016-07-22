(function (angular) {
  'use strict'

  angular
    .module('dfxio', [])
    .controller('dfxioController', function ($scope) {

    })
    .directive('dfxioDirective', function () {
      return {
        restrict: 'E',
        templateUrl: './dfxio.html',
        controller: 'dfxioController'
      }
  })
})(angular)
