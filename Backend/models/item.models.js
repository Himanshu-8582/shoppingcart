import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
    name: String,
    price: Number
}, { timestamps: true });

const Item = mongoose.model("Item", itemSchema); // We create a model (Table) named "Item" using the itemSchema defined above.

export default Item;
