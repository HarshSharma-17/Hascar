import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    name:String,
    brand:String,
    pricePerDay: Number,
    rating: Number,
    seats: Number,
    fuel: String,
    transmission: String,
    image: String,
    description: String,
});



export default mongoose.model('Car', carSchema);    