angular.module('theCarRepo')
  .factory('CarFactory', ['$http', CarFactory])

function CarFactory($http) {
  return {
    index: index,
    show: show,
    destroy: destroy,
    create: create,
    update: update
  }

  function index() {
    return $http.get('/api/cars')
  }

  function show(id) {
    return $http.get('/api/cars/' + id)
  }

  function destroy(id) {
    return $http.delete('/api/cars/' + id)
  }

  function create(car) {
    return $http.post('/api/cars/', car)
  }

  function update(id, data) {
    return $http.patch('/api/cars/' + id, data)
  }

}
