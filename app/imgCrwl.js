angular.module('imgCrwl', ['ngMaterial'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 60);
})
.controller('AppCtrl', function($scope,$http) {    
    $scope.getRequest = function () {
      $http.get("http://localhost:5001/api/?srchURL="+$scope.url)
        .then(function successCallback(response){
            $scope.imagePath = response.data;
        }, function errorCallback(response){
            console.log("Unable to perform get request");
        });
    };
});