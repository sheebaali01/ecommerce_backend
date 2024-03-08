import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";

export const newUser = async (
    req: Request<{},{},NewUserRequestBody>, 
    res: Response, 
    next: NextFunction) => {
    try {
        const { name, email, photo, gender, dob } = req.body
        const user = await User.create({
            name, email, photo, gender, dob
        });
        return res.status(200).json({
            success: true,
            messge: `Welcome,  ${name}`
        })

    }
    catch (error) {
        
    }
};
