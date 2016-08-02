var app = angular.module('Meaniscule', [
  'dfxAppRuntime',
  'dfxAppServices',
  'dfxGControls',
  'jkAngularCarousel',
  'ngAnimate',
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'ngMaterial',
  'ngMdIcons',
  'ngQuill',
  'nvd3',
  'ui.knob',
  'ui.router'
]);

app.config(function ($urlRouterProvider, $locationProvider, $mdThemingProvider) {
	// This turns off hashbang urls (/#about) and changes it to something normal (/about)
	$locationProvider.html5Mode(true);

	// If we go to a URL that ui-router doesn't have registered, go to the "/" url.
	$urlRouterProvider.otherwise('/');

  $mdThemingProvider.theme('success-toast').primaryPalette('blue');
  $mdThemingProvider.setDefaultTheme('success-toast');
});
