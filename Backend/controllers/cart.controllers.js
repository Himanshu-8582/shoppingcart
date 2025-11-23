import Cart from "../models/cart.models.js";

export const addToCart = async (req, res) => {
    try {
        const { itemId } = req.body;
        const userId = req.userId;; 
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            // Create new cart if none exists
            cart = await Cart.create({
                userId,
                items: [{ itemId, quantity: 1 }]
            });
        } else {
            // Check for user exists in cart or not
            const existingItem = cart.items.find((i) => i.itemId.toString() === itemId);

            if (existingItem) existingItem.quantity += 1; // increase quantity else cart.items.push({ itemId, quantity: 1 });
            else cart.items.push({ itemId, quantity: 1 });
            await cart.save();
        }

        res.status(200).json({success: true,message: "Item added to cart",cart});

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};


export const listCarts = async (req, res) => {
    try {
        // console.log("Middleware userId:", req.userId);
        const cart = await Cart.findOne({ userId: req.userId })
            .populate("items.itemId", "name price");
        if (!cart) {
            return res.json({ message: "Cart is empty", items: [] });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch cart" });
    }
};



