import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    car:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
    },
    startDate: Date,
    endDate: Date,
    totalPrice: Number,

}, {timestamps: true});

export default mongoose.model('Booking', bookingSchema);