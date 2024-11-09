const {FlightService} = require('../services/index.js');
const {SuccessCodes} = require('../utils/error-codes.js');

const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        res.status(SuccessCodes.CREATED).json({
            data:flight,
            message:"flight created",
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'flight not created',
            success:false,
            err:error
        });
    }
}

const get = async(req,res)=>{
    try {
        const flight = await flightService.getFlightData(req.params.id);
        res.status(SuccessCodes.OK).json({
            data:flight,
            message:"flight fetched successfully",
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'flight not fetched succeessfully',
            success:false,
            err:error
        });
    }  
}

const getAll = async (req,res)=>{
    try {
        
        const response = await flightService.getAllFlightData(req.query);
        res.status(SuccessCodes.OK).json({
            data:response,
            message:"flights fetched successfully",
            success:true,
            err:{}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'flights not fetched successfully',
            success:false,
            err:error
        });
    }
}

const update = async (req,res)=>{
    try {
        const response = flightService.updateFlight(req.params.id,req.body)
        res.status(SuccessCodes.OK).json({
            data:response,
            message:"flights updated successfully",
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'flights not updated successfully',
            success:false,
            err:error
        });
    }
}
module.exports = {
    create,
    get,
    getAll,
    update,
}