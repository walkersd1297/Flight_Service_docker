const express = require('express');
const router = express.Router();

const {FlightMiddlewares} = require('../../middlewares/index.js');
const CityController = require('../../controllers/city-controller.js');
const AirportController = require('../../controllers/airport-controller.js');
const FlightController = require('../../controllers/flight-controller.js');

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city',CityController.getAll);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);

router.post('/airport',AirportController.create);
router.delete('/airport/:id',AirportController.destroy);
router.get('/airport',AirportController.getAll);
router.get('/airport/:id',AirportController.get);
router.patch('/airport/:id',AirportController.update);


router.post('/flights',FlightMiddlewares.validateCreateFlight,FlightController.create);
router.get('/flights/:id',FlightController.get);
router.get('/flights',FlightController.getAll);
router.patch('/flights/:id',FlightController.update);

module.exports = router;