import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDb connected sucessfully")
    } catch (e) {
        console.log("Error while connecting to MongoDb", e);
    }
}

export default connectDB;