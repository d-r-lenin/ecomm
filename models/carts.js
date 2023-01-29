const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
    {
        items: [
            {
                id: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                count: {
                    type: Number,
                    required: true,
                },
            },
        ],
    },
    { 
        timestamps: true, 
        toJSON: { virtuals: true }, 
        toObject: { virtuals: true } 
    }
);

const Cart = model("Cart", cartSchema, "carts");

module.exports = Cart;
