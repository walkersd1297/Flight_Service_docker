const {CityService} = require('../services/index.js');
const {SuccessCodes} = require('../utils/error-codes.js');
 
const cityService = new CityService();

const create = async (req,res)=>{
    try {
        const city = await cityService.createCity(req.body);
        res.status(SuccessCodes.CREATED).json({
            data:city,
            message:'city created',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'city not created',
            success:false,
            err:error
        });
    }
}

const destroy = async (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        res.status(SuccessCodes.OK).json({
            data:response,
            message:'Successfully city deleted',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'city not deleted',
            success:false,
            err:error
        });
    }
}

const get = async (req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        res.status(SuccessCodes.OK).json({
            data:response,
            message:'Successfully fetched city ',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'city not fetched',
            success:false,
            err:error
        });
    }
}

const update = async (req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        res.status(SuccessCodes.OK).json({
            data:response,
            message:'Successfully updated city ',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'city not fetched',
            success:false,
            err:error
        });
    }
}

const getAll = async (req,res)=>{
    try {
        const cities = await cityService.getAllCities(req.query);
        res.status(SuccessCodes.OK).json({
            data:cities,
            message:'Successfully fetched cities ',
            success:true,
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            message:'cities not updated',
            success:false,
            err:error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
}