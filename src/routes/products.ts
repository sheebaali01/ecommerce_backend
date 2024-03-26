import express from 'express';
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getLatestProducts, getSingleProduct, newProduct, updateProduct } from '../controllers/product.js';
import { adminOnly } from '../middlewares/auth.js';
import { singleUpload } from '../middlewares/multer.js';

const app = express.Router();

app.post("/new" , adminOnly, singleUpload, newProduct);

app.get("/all" , getAllProducts);

app.get("/latest" , getLatestProducts );

app.get("/categories" , getAllCategories );

app.get("/admin-products" , getAdminProducts );

app.route("/:id")
.get( getSingleProduct )
.put(singleUpload,updateProduct)
.delete(deleteProduct);

export default app