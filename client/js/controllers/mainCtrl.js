//used for filter in nav bar
angular.module('theCarRepo')
  .controller('MainController', MainController)

MainController.$inject = ['$rootScope', '$state']

function MainController($rootScope, $state) {
  var vm = this
  $rootScope.$on('$stateChangeStart', function() {
    vm.$state = $state
  })

  vm.clearFilter = function() {
    vm.carFilter = ''
  }
}
