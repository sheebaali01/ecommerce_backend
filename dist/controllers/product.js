import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/product.js";
export const newProduct = TryCatch(async (req, res, next) => {
    const { name, category, price, stock } = req.body;
    const photo = req.file;
    const product = await Product.create({
        name, category: category.toLowerCase(), price, stock, photo: photo?.path
    });
    return res.status(201).json({
        success: true,
        message: "Product Created Successfully"
    });
});
