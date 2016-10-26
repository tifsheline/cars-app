var
  express = require('express'),
  carsRouter = express.Router(),
  carsCtrl = require('../controllers/cars.js')

carsRouter.route('/cars')
  .get(carsCtrl.index)
  .post(carsCtrl.create)

carsRouter.route('/cars/:id')
  .get(carsCtrl.show)
  .patch(carsCtrl.update)
  .delete(carsCtrl.destroy)

carsRouter.get('/seed', carsCtrl.seed)

module.exports = carsRouter
