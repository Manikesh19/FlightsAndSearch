const {City}= require('../models/index'); // index file returns all the corresponding models that we put in models package

class CityRepository {
    async createCity({ Name }) {
        try {
            const city= await City.create({ Name });
            return city;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = CityRepository;