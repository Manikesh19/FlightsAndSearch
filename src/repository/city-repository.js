const {City}= require('../models/index'); // index file returns all the corresponding models that we put in models package

class CityRepository {
    async createCity({ Name }) {
        try {
            const city= await City.create({ Name });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findbyPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }
}

module.exports = CityRepository;