import express from 'express';
import {getCars} from '../controllers/car.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/", authMiddleware, getCars);

export default router;