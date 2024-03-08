import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, photo, gender, dob } = req.body;
        const user = await User.create({
            name, email, photo, gender, dob
        });
        return res.status(200).json({
            success: true,
            messge: `Welcome,  ${name}`
        });
    }
    catch (error) {
    }
};
