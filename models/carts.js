const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
    {
        items: [
            {
                id: {
                    type: String,
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
        toObject: { virtuals: true } ,
        ttl: 60*60*24,
    }
);

const Cart = model("Cart", cartSchema, "carts");

module.exports = Cart;
