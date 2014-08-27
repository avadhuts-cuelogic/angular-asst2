'use strict';

/*
// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});  
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/

 //this is added by me
angular.module('myCust', [
  'ngRoute',
  'myCust.filters',
  'myCust.services',
  'myCust.directives',
  'myCust.controllers',
 ]).
config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/home', {templateUrl: 'partials/home.html' });
  $routeProvider.when('/about-us', {templateUrl: 'partials/about-us.html' });
  $routeProvider.when('/join-us', {templateUrl: 'partials/join-us.html' });
  $routeProvider.when('/cuelogic/clients', {templateUrl: 'partials/cuelogic/clients.html' ,controller : 'clientsController'});
  $routeProvider.when('/terms-and-conditions', {templateUrl: 'partials/terms-and-conditions.html' });
  $routeProvider.otherwise({redirectTo: '/home'});
  //this is added by me

 /* This is needed in filters and directives
  $routeProvider.when('/myCust1', {templateUrl: 'partials/myCust1.html', controller: 'simpleController'});
  $routeProvider.when('/myCust2', {templateUrl: 'partials/myCust2.html', controller: 'complexController'});
  $routeProvider.when('/myCust3', {templateUrl: 'partials/myCust3.html', controller: 'submitController'});
  $routeProvider.otherwise({redirectTo: '/myCust1'});*/

}]);
