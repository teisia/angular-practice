var app = angular.module('teisia', []);

app.controller('MyController', function($scope) {
  $scope.contractors = [];
  $scope.rate= 100;
  $scope.buttonText = 'add a contractor';
  $scope.getContractor = function() {
    var contractor = {};
    contractor.name = $scope.name;
    contractor.rate = $scope.rate;
    $scope.contractors.push(contractor);
    $scope.name = null;
    $scope.rate = null;
    console.log($scope.contractors);
    if ($scope.contractors.length > 3) {
      $scope.buttonText = 'REALLY?'
    } else if ($scope.contractors.length > 0){
      $scope.buttonText='Add another contractor';
    }
  }
});
