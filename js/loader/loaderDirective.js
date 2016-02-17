angular.module('myApp').directive('loaderDirective', function() {

    return{
        templateUrl: 'js/loader/loader.html',
        controller: function($scope, $timeout) {
           $scope.isLoading = false;

           $timeout(function(){
                 window.onload = $scope.isLoading = true;
               }, 3000);


        }


    };


});