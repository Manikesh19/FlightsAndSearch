const {response} = require('express');
const {FlightService}= require('../services/index');

const flightService=new FlightService();

const create = async(req, res) => {
    try {
        const flight=await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"Succesfully created a flight",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to create a flight",
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await flightService.deleteFlight(req.params.id);
        return res.status(200).json({
            data:response,
            success: true,
            message:"Sucessfully deleted a flight",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to delete the flight",
            err: error
        });
    }
}

const get = async(req, res) => {
    try {
        const flight = await flightService.getFlightData(req.params.id);
        return res.status(200).json({
        data:flight,
        success:true,
        message:"Successfully fetched the flight",
        err:{}
      })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to fetch the flight",
            err: error
        });
    }
}


const getAll = async(req,res) => {
    try {
        const flights= await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: flights,
            success:true,
            message: "Successfully fetched all the flights",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to fetch the flights",
            err: error
        });
    }
}

module.exports= {
    create,
    destroy,
    get,
    getAll
}