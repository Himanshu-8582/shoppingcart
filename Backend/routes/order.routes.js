import { Router } from "express";
import { createOrder, listOrders } from "../controllers/order.controllers.js";
import isAuth from "../middlewares/isAuth.js";

const orderRouter = Router();

orderRouter.post("/create", isAuth, createOrder);
orderRouter.get("/list", isAuth, listOrders);   

export default orderRouter;