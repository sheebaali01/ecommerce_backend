import express, { NextFunction, Request, Response } from 'express';
import { Error } from 'mongoose';
import { errorMiddleware } from './middlewares/error.js';
import { connectDB } from './utils/features.js';
import NodeCache from 'node-cache';
import { config } from 'dotenv';
import morgan from 'morgan';
import { Stripe } from 'stripe';
import cors from 'cors';

import userRoute from './routes/user.js';
import productRoute from './routes/products.js';
import orderRoute from './routes/order.js';
import paymentRoute from './routes/payment.js';
import dashboardRoutes from './routes/stats.js';


config({
    path:'./.env'
})

const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";

connectDB(mongoURI);

export const myCache = new NodeCache();
export const stripe = new Stripe(stripeKey);

const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Working with /api/v1');
});

app.use("/api/v1/user" , userRoute);
app.use("/api/v1/product" , productRoute);
app.use("/api/v1/order" , orderRoute);
app.use("/api/v1/payment" , paymentRoute);
app.use("/api/v1/dashboard" ,dashboardRoutes);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`express started at http://localhost:${port}`);
})