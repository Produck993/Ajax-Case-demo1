import { Router } from "express";
import productController from "../controller/product-controller";

export const productRoutes = Router();
productRoutes.get('', productController.getAll);
productRoutes.post('', productController.addProduct);
productRoutes.delete('/:id',productController.deleteProduct )