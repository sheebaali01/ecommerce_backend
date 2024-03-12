import { Request, Response, NextFunction } from "express";
import { TryCatch } from "../middlewares/error.js";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";
import ErrorHandler from "../utils/utility-class.js";

export const newUser = TryCatch(
    async (
        req: Request<{},{},NewUserRequestBody>, 
        res: Response, 
        next: NextFunction) => {

            // return next(new ErrorHandler("sheeba", 402));
            const { name, email, photo, gender,_id, dob } = req.body
            const user = await User.create({
                name, email, photo, gender, _id,dob:new Date(dob)
            });
            return res.status(201).json({
                success: true,
                messge: `Welcome, ${name}`
            })
    
        }
)
