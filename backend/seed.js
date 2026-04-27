import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Car from './src/models/car.model.js';

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        await Car.deleteMany();
        await Car.insertMany([
            {
                name: "Tata Nexon",
                brand: "Tata",
                pricePerDay: 2000,
                rating: 4.8,
                seats: 5,
                fuel: "Petrol",
                transmission: "Manual",
                //image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40079/tata-nexon-right-front-three-quarter.jpeg?q=75",
                description: "The Tata Nexon is a compact SUV that offers a blend of style, performance, and safety features. It is equipped with a powerful engine, spacious interiors, and advanced technology, making it an ideal choice for both city driving and long journeys."
            },

            {
                name: "Mahindra BE6",
                brand: "Mahindra",
                pricePerDay: 2500,
                rating: 4.7,
                seats: 5,
                fuel: "Electric",
                transmission: "Automatic",
                //image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40079/tata-nexon-right-front-three-quarter.jpeg?q=75",
                description: "The Mahindra BE6 is an electric SUV that combines eco-friendly technology with a stylish design. It offers a comfortable and spacious interior, advanced safety features, and a long-range battery, making it a great option for those looking to switch to electric vehicles."

            },

            {
                name: "Tata Safari",
                brand: "Tata",
                pricePerDay: 3000,
                rating: 4.9,
                seats: 7,
                fuel: "Diesel",
                transmission: "Automatic",
                //image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40079/tata-nexon-right-front-three-quarter.jpeg?q=75",
                description: "The Tata Safari is a premium SUV that offers a perfect blend of luxury, performance, and safety. It features a powerful engine, elegant design, and a host of advanced technologies, making it a top choice for discerning drivers."

            },

            {
                name: 'BMW 5 Series',
                brand: 'BMW',
                pricePerDay: 5000,
                rating: 4.9,
                seats: 5,
                fuel: "Petrol",
                transmission: "Automatic",
                //image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40079/tata-nexon-right-front-three-quarter.jpeg?q=75",
                description: "The BMW 5 Series is a luxury sedan that combines premium comfort, advanced technology, and exceptional performance. It features a powerful engine, elegant design, and a host of innovative features, making it a top choice for those seeking the ultimate driving experience."
            }
        ]);

        console.log("Data seeded successfully");
        process.exit();
        }catch(error) {
            console.log(error);
        }

    clear

    
};
seedData();