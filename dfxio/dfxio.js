(function (angular) {
  'use strict'

  var dfxio = function() {
    return {
      bindings: {
        component: '@'
      },
      templateUrl: function(elem, attr) {
        return attr.component + '/' + attr.component + '.html';
      }
      // controller: ['$scope', function ($scope) {
      //   $scope.hello = function () {
      //     alert('hello world');
      //   }
      // }]
    };
  }

  angular
    .module('dfxioModule', [])
    .controller('dfxioController', function ($scope) {
    })
    .directive('dfxio', dfxio);

  var appName = $('[ng-app]').attr('ng-app');

  angular
    .module(appName)
    .requires.push('dfxioModule');
})(angular)
