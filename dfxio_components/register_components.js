window.name = "NG_DEFER_BOOTSTRAP!" + window.name;
var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('script'); // use global document since Angular's $document is weak
  s.src = '/hello_world/hello_world.js';
  // async false may be required!
  //s.async = false;
  head.appendChild(s);

// FIX: need more specific event listener
//document.addEventListener("DOMContentLoaded", function(event) {
  //angular.resumeBootstrap(['dfxioModule', 'HelloWorldModule']);  
//});

  //angular.module('Meaniscule').requires.push('HelloWorldModule');
