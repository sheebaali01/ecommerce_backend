import express from 'express';
import { newOrder } from '../controllers/order.js';

import { adminOnly } from '../middlewares/auth.js';


const app = express.Router();

app.post("/new" , newOrder);



export default app