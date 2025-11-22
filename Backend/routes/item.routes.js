import { Router } from "express";
import { createItem,listItems } from "../controllers/item.controllers.js";
import isAuth from "../middlewares/isAuth.js";  

const itemRouter = Router();

itemRouter.post("/create", isAuth,createItem );
itemRouter.get("/list", listItems);

export default itemRouter;