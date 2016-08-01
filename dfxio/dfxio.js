function dfxio() {
  angular.resumeBootstrap(['dfxioModule', 'HelloWorldModule']);  
}

(function (angular) {
  'use strict';

  window.name = "NG_DEFER_BOOTSTRAP!" + window.name;

  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('script'); // use global document since Angular's $document is weak
  s.src = '/hello_world/hello_world.js';
  // async false may be required!
  //s.async = false;
  head.appendChild(s);

  var dfxio = function() {
    return {
      bindings: {
        component: '@'
      },
      templateUrl: function(elem, attr) {
        return attr.component + '/' + attr.component + '.html';
      }
    };
  };

  angular
    .module('dfxioModule', [])
    .controller('dfxioController', function ($scope) {
    })
    .directive('dfxio', dfxio);

  //var appName = $('[ng-app]').attr('ng-app'); 
  //angular
    //.module(appName)
    //.requires.push('dfxioModule');
})(angular);
