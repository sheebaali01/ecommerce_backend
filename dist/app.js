import express from 'express';
import userRoute from './routes/user.js';
const port = 4000;
const app = express();
app.get('/', (req, res) => {
    res.send('API Working with /api/v1');
});
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log(`express started at http://localhost:${port}`);
});
