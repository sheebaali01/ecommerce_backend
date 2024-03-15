import { Request } from "express";
import { rm } from "fs";
import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/product.js";
import { NewProductRequestBody } from "../types/types.js";
import ErrorHandler from "../utils/utility-class.js";

export const newProduct = TryCatch(
    async(req:Request<{},{},NewProductRequestBody>, 
        res, 
        next
        ) => {
            const { name, category, price, stock } = req.body;
            const photo = req.file;

            if(!photo) return next(new ErrorHandler("Please add Photo", 400));
            if(!name || !category || !price || !stock) {
                rm(photo.path,()=>{
                    console.log("file deleted");
                });
                return next(new ErrorHandler("Please enter all fields", 400));
            }
            const product = await Product.create({
                name, category:category.toLowerCase(), price, stock, photo:photo?.path
            });
            return res.status(201).json({
                success: true,
                message:"Product Created Successfully"
            });   
})