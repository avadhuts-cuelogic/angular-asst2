'use strict';

/* Directives */

 

  angular.module('myCust.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
  }]);
  /*
  .directive('first1',function(){
  	  return {
      restrict: 'E',
      templateUrl: 'partials/directiveHtml.html',
      replace: true
       };      
    })
   .directive('datt',function(){
  	  return {
      restrict: 'A',
      templateUrl: 'partials/directiveHtml2.html',
      replace: true
       };      
    })
   .directive('newdirt',function(){
  	  return {
      restrict: 'A',
      template: '<div>This is attribute directive inside a partial</div>',
      replace: true
       };      
    })
   .directive('commdir',function(){
  	  return {
      restrict: 'M',
      template: '<div>This is comment directive inside a partial</div>',
      replace: true
       };      
    })
    .directive('myclass',function(){
  	  return {
      restrict: 'C',
      template: '<div>This is class directive inside a partial</div>',
      replace: true
       };      
    })    
    .directive('toll',function(){
      return {
      restrict: 'E',
      templateUrl: 'partials/transcludeHtml.html',
      transclude: true 
       };      
    });
     */


