angular.module('searchRoute',['ngRoute']).config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/',{
        templateUrl     : '/app/views/hello.html'
    })
    .when('/id/:pid',{
        templateUrl     : '/app/views/product.html'
    })
    .when('/error',{
        templateUrl     : '/app/views/error.html'
    })
    .otherwise({redirectTo:'/error'})
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
  });
});