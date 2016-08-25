(function () {
    var app = angular.module("githubViewer");

    var MainController = function($scope, $interval, $location) {

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
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            // TODO: your code
        };

        $scope.username = "angular";
        $scope.countdown = 5;

        startCountDown();
    };

    app.controller("MainController", MainController);
}());

