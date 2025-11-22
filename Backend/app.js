import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';    
import connectDB from './config/db.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import itemRouter from './routes/item.routes.js';
import cartRouter from './routes/cart.routes.js';
import orderRouter from './routes/order.routes.js';

const app=express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/items", itemRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);


app.listen(PORT, async () => {
    try {
        connectDB();
        console.log(`Server is running on port ${PORT}`);
    }catch(e){
        console.log("Error in server setup", e);
    }
})