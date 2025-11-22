import Item from "../models/item.models.js";

export const createItem = async (req, res) => {
    const item = await Item.create(req.body);
    res.json(item);
};

export const listItems = async (req, res) => {
    res.json(await Item.find());
};


