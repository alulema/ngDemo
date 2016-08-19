/**
 * Created by alexis on 8/19/16.
 */
/**
 * Created by Alexis on 8/19/2016.
 */

(function () {
    var github = function ($http) {
        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        };

        return {

        };
    };

    var module = angular.module("githubViewer");
}());