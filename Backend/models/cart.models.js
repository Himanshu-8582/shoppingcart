import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
            quantity: { type: Number, default: 1 }
        }
    ]
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema); // We create a model (Table) named "Cart" using the cartSchema defined above.

export default Cart;

