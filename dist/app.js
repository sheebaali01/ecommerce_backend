import express from 'express';
import { errorMiddleware } from './middlewares/error.js';
import userRoute from './routes/user.js';
import productRoute from './routes/products.js';
import { connectDB } from './utils/features.js';
const port = 4000;
connectDB();
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('API Working with /api/v1');
});
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`express started at http://localhost:${port}`);
});
