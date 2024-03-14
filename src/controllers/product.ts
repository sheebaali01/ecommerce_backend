import { Request } from "express";
import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/product.js";
import { NewProductRequestBody } from "../types/types.js";

export const newProduct = TryCatch(
    async(req:Request<{},{},NewProductRequestBody>, 
        res, 
        next
        ) => {
            const { name, category, price, stock } = req.body;
            const photo = req.file;

            const product = await Product.create({
                name, category:category.toLowerCase(), price, stock, photo:photo?.path
            });
            return res.status(201).json({
                success: true,
                message:"Product Created Successfully"
            });   
})