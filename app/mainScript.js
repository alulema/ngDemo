/**
 * Created by Alexis Alulema on 8/17/2016.
 */

(function () {
    var app = angular.module("githubViewer", []);

    var MainController = function($scope, $http) {
        var onRepos = function (response) {
            $scope.repos = response.data;
        };

        var onFullfillment = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url).then(onRepos, onRejection);
        };

        var onRejection = function (response) {
            $scope.error = "Could not fetch the user";
        };

        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username).then(onFullfillment, onRejection);
        };

        $scope.message = "GitHub viewer!";
        $scope.username = "angular";
    };

    app.controller("MainController", ["$scope", "$http", MainController]);
}());

