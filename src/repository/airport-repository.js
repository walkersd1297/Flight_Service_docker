const { Op } = require('sequelize');
const {Airport} = require('../models/index.js');

class AirportRepository{
    async createAirport({name,cityId}){
        try {
            const airport = Airport.create({
                name:name,
                cityId:cityId
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong in repositry layer");
            throw (error);
        }
    }

    async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId)
            return airport;
        } catch (error) {
            console.log("Something went wrong in repositry layer");
            throw (error);
        }
    }

    async deleteAirport(airportId){
        try {
            const airport = await Airport.destroy({
                where:{
                    id:airportId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repositry layer");
            throw (error);
        }
    }

    async updateAirport(airportId,data){
        try {
            const result = await Airport.update(data, {
                where: {
                    id: airportId
                },
                 
            });
        } catch (error) {
            console.log("Something went wrong in repositry layer");
            throw (error);
        }
    }

    async getAllAirports(filter){
        try {
            if(filter.name){
                const airports = await Airport.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return airports;
            }
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("Something went wrong in repositry layer");
            throw (error);
        }
    }
}

module.exports = AirportRepository;