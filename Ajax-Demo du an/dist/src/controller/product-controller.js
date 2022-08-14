"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../model/products");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await products_1.Product.find();
            res.status(200).json(products);
        };
        this.addProduct = async (req, res) => {
            let product = req.body;
            product = await products_1.Product.create(product);
            res.status(201).json(product);
        };
        this.deleteProduct = async (req, res) => {
            let id = req.params.id;
            let product = await products_1.Product.findById(id);
            if (!product) {
                res.status(404).json();
            }
            else {
                product.delete();
                res.status(204).json();
            }
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map