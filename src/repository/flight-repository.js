const {Flights}=require('../models/index');

class FlightRepository {
    async createFlight(data) {
        try {
            const flight=await Flights.create(data);
            return flight;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw{error};
        }
    }
    async deleteFlight(flightId) {
        try {
            await Flights.destroy({
                where: {
                    id: flightId
                }
            });
            return true;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw{error};
        }
    }
    async updateFlight() {
        try {
            
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw{error};
        }
    }
    async getFlight() {
        try {
            
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw{error};
        }
    }
}

module.exports= FlightRepository;
