angular.module('theCarRepo')
  .controller('SingleCarController', SingleCarController)

SingleCarController.$inject = ['$stateParams', '$state', 'CarFactory']

function SingleCarController($stateParams, $state, CarFactory) {
  var vm = this;

  CarFactory.show($stateParams.id)
    .success(function(car) {
      vm.car = car;
      console.log(vm.car)
    })

  vm.destroyCar = function() {
    CarFactory.destroy(vm.car._id)
      .success(function(data) {
        $state.go('cars')
      })
  }
}
