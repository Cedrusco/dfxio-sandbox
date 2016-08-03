(function (angular) {
  'use strict';
  var resume;
  var count = 0;
  var modules = [];
  var angularModule = angular.module.bind(angular);
  angular.module = function(moduleName, moduleDependencies) {
    modules.push(moduleName);
    return angularModule(moduleName, moduleDependencies);
  };

  function makeResume(numOfModules) {
    function resume(modulesLoaded, modules) {
      if(modulesLoaded === numOfModules) {
        // Filter out the main app to avoid side effects
        var mainApp = $('[ng-app]').attr('ng-app');
        modules = modules.filter(function(val) {
          return val !== mainApp; 
        });
        angular.resumeBootstrap(modules);
      }  
    }

    return resume;
  }

  function loadNewScript(source) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('script'); // use global document since Angular's $document is weak

    s.src = source;

    s.onload = function helper() {
        count++
        resume(count, modules)
        console.log('script has loaded')
    };

    // async false may be required!
    //s.async = false;
    head.appendChild(s);
  }

  window.name = "NG_DEFER_BOOTSTRAP!" + window.name;

  //load components in array
    $.get('/components.json').success(function(data) {
      resume = makeResume(data.length);
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
