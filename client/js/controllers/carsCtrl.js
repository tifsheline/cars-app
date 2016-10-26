angular.module('theCarRepo')
  .controller('CarsController', CarsController)

CarsController.$inject = ['$scope', '$state', 'CarFactory']

function CarsController($scope, $state, CarFactory) {
  var vm = this

  // limit car description length on cars index:
  vm.textLimit = 140

  // get all cars when controller loads:
  // $http.get('/api/cars')
  CarFactory.index()
    .success(function(data) {
      vm.cars = data
    })

  vm.destroyCar = function(car, index) {
    // invoke CarFactory destroy method, with the id of the car we clicked:
    CarFactory.destroy(car._id)
      .success(function(data) {
        console.log(data)
        // when it's confirmed that it's gone from the database, find the matching car in the array and remove it:
        vm.cars.splice(index, 1)
      })
  }
}
