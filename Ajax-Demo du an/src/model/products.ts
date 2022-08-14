import { model, Schema } from "mongoose";

interface IProducts{
name? : string;
price? : number;
amount? : number;
image? : string;
description? : string
}

const productSchema = new Schema<IProducts> ({
    name : String,
    price: Number,
    amount : Number,
    image : String,
    description : String
})

const Product = model<IProducts>('Products', productSchema);
export {Product};