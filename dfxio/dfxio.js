

(function (angular) {
  'use strict';

  function resume() {
    angular.resumeBootstrap(['dfxioModule', 'HelloWorldModule']);  
  }

  function loadNewScript(source) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('script'); // use global document since Angular's $document is weak

    s.src = source;

    s.onload = function helper() {
        resume()
        console.log('script has loaded')
    }; 
    
    // async false may be required!
    //s.async = false;
    head.appendChild(s);
  }

  window.name = "NG_DEFER_BOOTSTRAP!" + window.name;

  //load components in array
    $.get('/components.json').success(function(data) {
      data.forEach(function(script) {
        loadNewScript(script)
    })
  })

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
