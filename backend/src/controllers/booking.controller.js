import Booking from "../models/booking.model.js";
import Car from "../models/car.model.js";

export const createBooking = async (req, res) => {
    try{
        const { carId, startDate, endDate } = req.body;
        const car = await Car.findById(carId);
        if(!car){
            return res.status(404).json({ message: "Car not found" });
        }
        const days = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
        const totalPrice = days * car.pricePerDay;
        const booking = await Booking.create({
            user: req.user.id,
            car: carId,
            startDate,
            endDate,
            totalPrice,
        });
        res.json({ message: "Booking Successful", booking});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

export const getMyBookings = async (req, res) => {
    try{
        const bookings = await Booking.find({ user: req.user.id }).populate("car");
        res.json(bookings);
    
    }catch(error){
        res.status(500).json({error: error.message});
    }
};
