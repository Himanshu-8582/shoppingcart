import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
            quantity: { type: Number, required: true, min: 1 }
        }
    ],
    status: {
        type: String,
        default: "Placed",
        enum: ["Placed", "Processing", "Completed", "Cancelled"]
    }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;
