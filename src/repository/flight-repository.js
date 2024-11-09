const {Flights} = require('../models/index.js');
const {Op, where} = require('sequelize');

class FlightRepository{

    #createFilter(data){
        let filter = {}
        if(data.arrivakAirportId){
            filter.arrivalAirportId = data.arrivakAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        if(data.minPrice && data.maxPrice){
            Object.assign(filter,{
                [Op.and] : [
                    {price:{[Op.gte] : data.minPrice}},
                    {price:{[Op.lte] : data.maxPrice}}
                ]
            });
        }
        if(data.minPrice){
            Object.assign(filter,{price : {[Op.gte] : data.minPrice}});
        }

        if(data.maxPrice){
            Object.assign(filter,{price : {[Op.gte] : data.maxPrice}});
        }
        
    }

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repo file")
            throw (error)
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in repo file")
            throw (error)
        } 
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where:filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in repo file")
            throw (error)
        }
    }

    async updateFlights(flightId,data){
        try {
            await Flights.update(data,{
                where:{
                    id:flightId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repo file")
            throw (error);
        }
    }
}


module.exports = FlightRepository