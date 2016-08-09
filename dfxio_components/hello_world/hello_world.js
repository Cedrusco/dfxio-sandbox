angular
  .module('HelloWorldModule', [])
  .controller( "HelloWorldController", ['$scope', 'dfxDialog', function ( $scope, dfxDialog ) {
  	$scope.menu_state = true;
    	$scope.hello = function() {
      	dfxDialog.showMessage( 'Hello World!' );
      };
  }]);

function isLoaded() {
	console.log('loaded');
}

// dfxio();
//angular.module('Meaniscule').requires.push('HelloWorldModule');
