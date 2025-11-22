import Cart from "../models/cart.models.js";
import Order from "../models/order.models.js";

export const createOrder = async (req, res) => {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) return res.status(400).json({ error: "Cart empty" });

    const order = await Order.create({
        userId: req.user._id,
        items: cart.items
    });

    await Cart.deleteOne({ userId: req.user._id });

    res.json({ message: "Order successful", order });
};

export const listOrders = async (req, res) => {
    const orders = await Order.find({ userId: req.user._id })
        .populate("items.itemId", "name price");
    res.json(orders);
};
