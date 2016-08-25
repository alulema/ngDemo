
(function () {
    var app = angular.module("githubViewer");

    var MainController = function($scope, github, $interval, $log, $anchorScroll, $location) {

        var onUserComplete = function (data) {
            $scope.user = data;
            //$http.get($scope.user.repos_url).then(onRepos, onError);
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function (data) {
            $scope.repos = data;
            $location.hash("userDetails");
            $anchorScroll();
        };

        var onError = function (reason) {
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
            //$http.get("https://api.github.com/users/" + username).then(onUserComplete, onError);
            github.getUser(username).then(onUserComplete, onError);
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

    app.controller("MainController", MainController);
}());

