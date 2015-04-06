var myApp = angular.module('myApp', []);
myApp.controller('PropertyController', function ($scope, $http, $filter) {

    $scope.MyClick = function () {
        $scope.Error = "";

        debugger;
        // method: type Get/Post (get for http get protocal like select operation, 
        // and Post method type for save data and update data like this
        //when we will use method then parameter in: Get ----->params
        // when we will use method then parameter in: Post-----data
        $http({
            method: 'Get',
            url: 'http://kusg4393.azurewebsites.net/Main/driver/GetNewOrders?driverid=D9042D3C-D356-469E-9615-23FFE86C7EFA',
            params: { }
        }).success(function (data, status, headers, config) {
            debugger;
            $scope.MyDriverList = data;
            debugger
        });
    }

    $scope.AcceptOrder = function () {
        alert('hi')
        // loop in checkbox and get all checked orders.
       
    }
});