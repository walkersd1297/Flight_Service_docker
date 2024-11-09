const {FlightRepository,AirplaneRepository} = require('../repository/index.js');
const {compareTime} = require('../utils/helper.js');


class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error:'Arrival time cannot be less than departure time'};
            }
            const airplane = this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = this.flightrepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service file");
            throw (error);
        }
    }

    async getFlightData(flightId){
        try {
            const flight = await this.flightrepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in service file");
            throw (error)
        }
    }

    async getAllFlightData(data){
        try {
            const flight = await this.flightrepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in service file");
            throw (error);
        }
    }

    async updateFlight(flightId,data){
        try {
            const response = this.flightrepository.updateFlights(flightId,data);
            return response;
        } catch (error) {
            console.log("Something went wrong in service file");
            throw (error);
        }
    }
}

module.exports = FlightService;