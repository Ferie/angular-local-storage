/**
 * Local Storage Service
 * 
 * @module angular-local-storage
 * @namespace angular-local-storage
 * 
 * @description
 * Service that is saving and retrieving any data from the $window.localStorage
 * 
 * @example
 * ngLocalStorage.set('email', $scope.email);
 * ngLocalStorage.get('email');
 * ngLocalStorage.remove('email');
 * ngLocalStorage.clear();
 */

(function () {
    'use strict';

    angular.module('angular-local-storage', []).factory('ngLocalStorage', ngLocalStorage);

    ngLocalStorage.$inject = ['$window'];

    /**
     * @factory ngLocalStorage
     * @name ngLocalStorage
     * @memberOf angular-local-storage
     * @return {object}
     * @description Service that stores data into the browser's localStorage
     * @param $window
     */

    function ngLocalStorage($window) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key) {
                return $window.localStorage[key] || false;
            },
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            getObject: function (key) {
                if ($window.localStorage[key] != undefined) {
                    return JSON.parse($window.localStorage[key] || false);
                }
                return false;
            },
            remove: function (key) {
                $window.localStorage.removeItem(key);
            },
            clear: function () {
                $window.localStorage.clear();
            }
        };
    }
}());