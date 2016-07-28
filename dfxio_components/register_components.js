var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('script'); // use global document since Angular's $document is weak
  s.src = '/hello_world/hello_world.js';
  head.appendChild(s);

  angular.module('Meaniscule').requires.push('HelloWorldModule');
