angular.module('theCarRepo')
  .controller('EditCarController', EditCarController)

EditCarController.$inject = ['$stateParams','$state', 'CarFactory']

function EditCarController($stateParams, $state, CarFactory) {
  var vm = this;

  CarFactory.show($stateParams.id)
    .success(function(data) {
      vm.car = data
    })

  vm.editCar = function() {
    console.log(vm.car)
    CarFactory.update($stateParams.id, vm.car)
      .success(function(data) {
        console.log(data)
        $state.go('car', {id: $stateParams.id}) //adds car to DOM
      })
    }
}
