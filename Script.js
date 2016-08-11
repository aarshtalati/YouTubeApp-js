(function () {
    'use strict';

    var app = angular.module('app', []);



    app
        .service('googleBrowserKeyService', googleBrowserKeyService);
    googleBrowserKeyService.$inject = ['$http'];
    function googleBrowserKeyService($http) {
        this.getKey = function() {
            
        };
    }
})();

app
    .controller('homeController', homeController);
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


app
    .service('ytChService', ytChService);

ytChService.$inject = ['$http'];
function ytChService($http) {

    var getUrl = 'https://www.googleapis.com/youtube/v3/channels';

    this.exposedFn = exposedFn;

    ////////////////

    function exposedFn() {

        alert('calling service');

        var parameters = {
            part: 'contentDetails',
            // playlistId: 'PL2rlbdtNavUBu8NeZ7w8ed0Ka0uGBQhmh',
            forUsername: 'EllieGouldingVEVO',
            // maxResults:2,
            key: 'AIzaSyCQQcU7wW-qrHfz5Sf4GY7x8bBYb5rsuqA'
        }

        return $http({
            url: getUrl,
            method: 'GET',
            params: parameters
        })
    }
}

app
    .service('ytPlService', ytPlService);

ytPlService.$inject = ['$http'];
function ytPlService($http) {

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
            key: 'AIzaSyCQQcU7wW-qrHfz5Sf4GY7x8bBYb5rsuqA'
        }

        return $http({
            url: getUrl,
            method: 'GET',
            params: parameters
        })
    }
}

app
    .service('ytPiService', ytPiService);

ytPiService.$inject = ['$http'];
function ytPiService($http) {

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
            key: 'AIzaSyCQQcU7wW-qrHfz5Sf4GY7x8bBYb5rsuqA'
        }

        return $http({
            url: getUrl,
            method: 'GET',
            params: parameters
        })
    }
}
})();