angular.module('theCarRepo')
  .controller('ShareController', ShareController)

ShareController.$inject = ['$scope','$state', 'CarFactory']

function ShareController($scope, $state, CarFactory) {
  var vm = this;

  vm.createCar = function() {
    console.log(vm.newCar)
    CarFactory.create(vm.newCar)
      .success(function(data) {
        console.log(data)
        $state.go('cars') //adds car to DOM
      })
    }
}
