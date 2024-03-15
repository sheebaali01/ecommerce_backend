import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/product.js";
import ErrorHandler from "../utils/utility-class.js";
export const newProduct = TryCatch(async (req, res, next) => {
    const { name, category, price, stock } = req.body;
    const photo = req.file;
    if (!photo)
        return next(new ErrorHandler("Please Add Photo", 400));
    const product = await Product.create({
        name, category: category.toLowerCase(), price, stock, photo: photo?.path
    });
    return res.status(201).json({
        success: true,
        message: "Product Created Successfully"
    });
});
