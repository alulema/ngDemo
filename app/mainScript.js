/**
 * Created by Alexis Alulema on 8/17/2016.
 */

(function () {
    var app = angular.module("githubViewer", []);

    var MainController = function($scope, $http, $interval, $log, $anchorScroll, $location) {
        var onRepos = function (response) {
            $scope.repos = response.data;
            $location.hash("userDetails");
            $anchorScroll();
        };

        var onFullfillment = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url).then(onRepos, onRejection);
        };

        var onRejection = function (response) {
            $scope.error = "Could not fetch the user";
        };

        var decrementCountDown = function () {
            $scope.countdown -= 1;

            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        var countdownInterval = null;

        var startCountDown = function () {
            countdownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
        };

        $scope.search = function (username) {
            $log.info("Searching for " + username);
            $http.get("https://api.github.com/users/" + username).then(onFullfillment, onRejection);
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
        };

        $scope.message = "GitHub viewer!";
        $scope.username = "angular";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;

        startCountDown();
    };

    app.controller("MainController", ["$scope", "$http", "$interval", "$log", "$anchorScroll", "$location", MainController]);
}());

