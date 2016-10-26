angular.module('theCarRepo', ['ui.router', 'ui.bootstrap'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', router])
  .directive('navigationBar', navigationBar)

function router($stateProvider, $urlRouterProvider, $locationProvider) {
  // remove the base '/#/' from the url:
  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('cars', {
      url: '/cars',
      templateUrl: 'templates/cars.html',
      controller: 'CarsController as cc'
    })
    .state('share', {
      url: '/cars/new',
      templateUrl: 'templates/new.html',
      controller: 'ShareController as sc'
    })
    .state('edit', {
      url: '/cars/:id/edit',
      templateUrl: 'templates/update.html',
      controller: 'EditCarController as ecc'
    })
    .state('car', {
      url: '/cars/:id',
      templateUrl: 'templates/car.html',
      controller: 'SingleCarController as scc'
    })
}

function navigationBar() {
  return {
    restrict: 'E',
    templateUrl: 'partials/nav.html'
  }
}
