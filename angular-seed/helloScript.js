  //create the object of printMsgapp module 
  var printMsgapp = angular.module('printMsgapp',[]);
  
  //add a controller 'FirstController' to 'printMsgapp' module  
  //The controller binds 
  printMsgapp.controller('FirstController',
   function ($scope)
    {
      $scope.strHello = "Hello";
  
    });   