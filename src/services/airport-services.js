const {AirportRepository} = require('../repository/index.js');

class AirportService{
    constructor(){
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data){
        try {
            const airport = this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw (error);
        }
    }

    async deleteAirport(airportId){
        try {
            const response = this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw (error);
        }
    }

    async getAirport(airportId){
        try {
            const airport = this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw (error);
        }
    }

    async updateAirport(airportId,data){
        try {
            const airport = this.airportRepository.updateAirport(airportId,data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw (error);
        }
    }

    async getAllAirports(filter){
        try {
            const airports = this.airportRepository.getAllAirports({name:filter.name});
            return airports;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw (error);
        }
    }
}

module.exports = AirportService;