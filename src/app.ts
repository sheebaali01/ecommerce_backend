import express, { NextFunction, Request, Response } from 'express';
import { Error } from 'mongoose';
import { errorMiddleware } from './middlewares/error.js';
import { connectDB } from './utils/features.js';
import NodeCache from 'node-cache';
import { config } from 'dotenv';
import morgan from 'morgan';

import userRoute from './routes/user.js';
import productRoute from './routes/products.js';
import orderRoute from './routes/order.js';

config({
    path:'./.env'
})

const port = process.env.PORT || 4000;
const mongo_uri = process.env.MONGO_URI || "";

connectDB(mongo_uri);

export const myCache = new NodeCache();

const app = express();


app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('API Working with /api/v1');
});

app.use("/api/v1/user" , userRoute);
app.use("/api/v1/product" , productRoute);
app.use("/api/v1/order" , orderRoute);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`express started at http://localhost:${port}`);
})