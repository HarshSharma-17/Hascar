import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./src/db/db.js";
import carRoutes from "./src/routes/car.routes.js";
import authRoutes from "./src/routes/auth.routes.js";
dotenv.config();


const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

connectDB();

app.use('/api/cars', carRoutes);


app.get("/", (req, res) => {
    res.send("API is running..,");

});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});