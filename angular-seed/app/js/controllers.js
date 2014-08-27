'use strict';

/* Controllers */

/*angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);*/

   angular.module('myCust.controllers', [])
  .controller('clientsController', ['$scope', function($scope) {
       
      
        $scope.displist = function()
          {
             $scope.clientList = [{ name:'Multi', info:'Education'},
                             { name:'AccessGe', info:'FM'},
                             { name:'Mips', info:'semiconductors'}];   
          }

  }]);

/* This is required in filters and directives
//this is simpleController for myCust1
angular.module('myCust.controllers', [])
  .controller('simpleController', ['$scope', function($scope) {
     $scope.names = [
			     {name:'Tushar mate',city:'pune'},
			     {name:'Tushar sonawane',city:'mumbai'},
			     {name:'prasanna',city:'mumbai'}
                ];  
     $scope.my = { favorite: 'unicorns' };
     $scope.val = 100; 
     $scope.msg1 = "Msg";  
     $scope.items = ['A', 'B', 'other'];
     $scope.selection = $scope.items[0];
     $scope.colors = [
      {name:'black', shade:'dark'},
      {name:'white', shade:'light'},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark'},
      {name:'yellow', shade:'light'}
    ];
     $scope.numbers = [11,22,33,44,55,66,77,88,99];
     $scope.numLimit = 5;
     $scope.valNum = 444400;

     $scope.countVal = function()
      {
         $scope.val = $scope.val - 1;  
      }

     $scope.disp = function()
      {
        $scope.msg1 = "Yours msg"; 
      }

     $scope.disp2 = function()
      {
        $scope.msg1 = "No Msg"; 
      }
  }])
  .controller('complexController', ['$scope', function($scope) {
      $scope.strHello = "Hello";
      $scope.hash2 = "img1.jpg";
      $scope.names2 = ['morpheus', 'neo', 'trinity'];
      $scope.changed = function()
       {
         $scope.hash2 = "img2.jpg";
       };
  }])
  .controller('submitController', ['$scope', function($scope) {
     $scope.submit = function()
     {
       if($scope.text1)
       {  $scope.savetext = $scope.text1; 
          $scope.text1 ="";  
       }

     }
     $scope.isDisabled = false;
    // $scope.myurl = "partials/myCust2.html"; 
      $scope.user = { name: 'say', data: '' };

      $scope.cancel = function (e) {
        if (e.keyCode == 27) {
          $scope.userForm.userName.$rollbackViewValue();
        }
      };

     $scope.dispmessage = function()
     {
        $scope.msg ='Drawing Competition'; 
     }     
  }])
  .controller('SetCon1', SetCon1);

  function SetCon1()
   {
     this.msg = "hicontroller";
   }*/

  
