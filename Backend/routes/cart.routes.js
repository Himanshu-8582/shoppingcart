import { Router } from "express";
import { addToCart, listCarts } from "../controllers/cart.controllers.js";
import isAuth from "../middlewares/isAuth.js";  

const cartRouter = Router();

cartRouter.post("/add", isAuth, addToCart);
cartRouter.get("/list", listCarts);

export default cartRouter;