import Car from '../models/car.model.js';

export const getCars = async(req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
};