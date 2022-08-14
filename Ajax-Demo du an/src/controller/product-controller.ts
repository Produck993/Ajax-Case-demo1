import { Request, Response } from "express";
import { Product } from "../model/products"

class ProductController {
    getAll =  async (req : Request, res : Response) => {
        let products = await Product.find();
        res.status(200).json(products)
    };

    addProduct = async (req : Request, res : Response) => {
        let product = req.body;        
        product = await Product.create(product)
        res.status(201).json(product)
    }
    deleteProduct = async (req : Request, res : Response) => {
        let id = req.params.id;
        let product = await Product.findById(id);
        if(!product) {
            res.status(404).json();
        } else {
            product.delete()
            res.status(204).json();
        }
    }
}

export default new ProductController();