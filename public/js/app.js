angular.module('TinCan', ['ui.router'])

angular.module('TinCan')
    .config(function ($stateProvider, $urlRouterProvider) {
    // .config(tinCanRouter)

// tinCanRouter.$inject = ['$stateProvider, $urlRouterProvider'];
//
// function tinCanRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
//         // .state('tangles', {
//         //     url         : '/',
//         //     templateUrl : 'list.html',
//         //     controller  : 'ListCtrl as lCtrl'
//         // })
//         .state('listView', {
//             url         : '/list',
//             templateUrl : 'list.html',
//             controller  : 'ListCtrl as lCtrl'
//         })
//         .state('mapView', {
//             url         : '/map',
//             templateUrl : 'list.html',
//             controller  : 'MapCtrl as mCtrl'
//         })
        .state('create', {
            url         : '/create',
            templateUrl : '/views/create.html'
        })
//
//         $urlRouterProvider.otherwise('/')
});
