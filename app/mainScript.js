/**
 * Created by Alexis Alulema on 8/17/2016.
 */

(function () {
    var app = angular.module("githubViewer", []);

    var MainController = function($scope, $http) {
        var onFullfillment = function (response) {
            $scope.user = response.data;
        };

        var onRejection = function (response) {
            $scope.error = "Could not fetch the user";
        };

        $http.get("https://api.github.com/users/robconery").then(onFullfillment, onRejection);

        $scope.message = "Hello Angular!";
    };

    app.controller("MainController", ["$scope", "$http", MainController]);
}());

