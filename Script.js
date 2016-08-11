(function () {
    'use strict';

    var app = angular.module('app', []);


    app.service('googleBrowserKeyService', googleBrowserKeyService);
    googleBrowserKeyService.$inject = ['$http'];
    function googleBrowserKeyService($http) {
        this.getKey = function () {
            $http.get('GoogleKeys.json').success(function (data) {
                if (!data.BrowserApiKey) {
                    return '';
                }
                console.log('boo yeah!', data.BrowserApiKey);
                return data.BrowserApiKey;
            }).error(function () {
                console.log('can not read API key from JSON file');
                return '';
            });
        };
    }


    app.controller('homeController', homeController);
    homeController.$inject = ['$scope', 'ytPiService'];
    function homeController($scope, ytPiService) {
        var vm = this;

        $scope.makeRequest = function () {
            ytPiService.exposedFn().success(function (data, header, config) {
                console.log('done');
                console.log(data);
            }).error(function (data) {
                console.log('error');
                console.log(data.error);
            })
        };

        activate();

        ////////////////

        function activate() { }

    }


    app.service('ytChService', ytChService);
    ytChService.$inject = ['$http', 'googleBrowserKeyService'];
    function ytChService($http, apiService) {

        var getUrl = 'https://www.googleapis.com/youtube/v3/channels';

        this.exposedFn = exposedFn;

        ////////////////

        function exposedFn() {

            alert('calling service');

            var parameters = {
                part: 'contentDetails',
                id: 'UCZPiiUjDlrBv4jiiRqk5dSA',
                maxResults: 3,
                key: apiService.getKey()
            }

            return $http({
                url: getUrl,
                method: 'GET',
                params: parameters
            })
        }
    }

    app.service('ytPlService', ytPlService);
    ytPlService.$inject = ['$http', 'googleBrowserKeyService'];
    function ytPlService($http, apiService) {

        var getUrl = 'https://www.googleapis.com/youtube/v3/playlists';

        this.exposedFn = exposedFn;

        ////////////////

        function exposedFn() {

            alert('calling service');

            var parameters = {
                "kind": "youtube#playlistListResponse",
                part: 'contentDetails',
                // playlistId: 'PL2rlbdtNavUBu8NeZ7w8ed0Ka0uGBQhmh',
                channelId: 'UCvu362oukLMN1miydXcLxGg',
                maxResults: 10,
                pageToken: '',
                key: apiService.getKey()
            }

            return $http({
                url: getUrl,
                method: 'GET',
                params: parameters
            })
        }
    }

    app.service('ytPiService', ytPiService);
    ytPiService.$inject = ['$http', 'googleBrowserKeyService'];
    function ytPiService($http, apiService) {

        var getUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';

        this.exposedFn = exposedFn;

        ////////////////

        function exposedFn() {

            alert('calling service');

            var parameters = {
                "kind": "youtube#playlistItemListResponse",
                part: 'snippet',
                playlistId: 'PL2rlbdtNavUBu8NeZ7w8ed0Ka0uGBQhmh',
                maxResults: 10,
                pageToken: '',
                key: apiService.getKey()
            }

            return $http({
                url: getUrl,
                method: 'GET',
                params: parameters
            })
        }
    }
})();