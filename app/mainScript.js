/**
 * Created by Alexis on 8/17/2016.
 */

var MainController = function($scope, $http) {
    $http.get("https://api.github.com/users/robconery")

    var person = {
        firstName: "Alexis",
        lastName: "Alulema",
        imageSrc: "http://ep01.epimg.net/iconos/v1.x/v1.0/banderas/svg/ecu.svg"
    };
    $scope.message = "Hello Angular!";
    $scope.person = person;
};