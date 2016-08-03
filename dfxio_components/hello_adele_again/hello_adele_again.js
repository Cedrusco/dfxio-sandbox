// this line should not be removed
var NewView278 = angular.module("NewView278",['dfxAppServices']);

NewView278.controller( "HelloAdeleAgainController", [ '$scope', 'dfxApiServices', 'dfxDialog', 'dfxSidenav', 'dfxBottomSheet', 'dfxChangeCard', function( $scope, dfxApiServices, dfxDialog, dfxSidenav, dfxBottomSheet, dfxChangeCard ) {
  dfxApiServices.get( $scope, 'blog/feed', {}).then(function(response){
      $scope.$apply( function() {
          $scope.results = response.data.feed.link;
      });
  }).fail(function(error){
  });
}]);
