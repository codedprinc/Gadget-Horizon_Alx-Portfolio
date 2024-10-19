import mongoose from "mongoose";
import { Phone } from "./phoneModel";
import { User } from "./userModel";
//Include fields: user (reference), products, total price, status

const orderItemsSchema = new mongoose.Schema({
    //order_id: { type: Schema.Types.ObjectId, ref: 'order_details', unique: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'Phones' },
    quantity: { type: Number, default: 0 },

}, { timestamps: true });

const orderDetailsSchema = new mongoose.Schema({
    //_id: { type: Schema.Types.ObjectId, ref: 'order_details', unique: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User'},
    payment_id: { type: Number, default: 0 },
    total_price: { type: Number, default: 0 }

}, { timestamps: true });