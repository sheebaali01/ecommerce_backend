import mongoose from "mongoose";

export const DBconnect = () => {
    mongoose.connect("mongodb://localhost:27017",{
        dbName:"ecommerce",
    }).then
}