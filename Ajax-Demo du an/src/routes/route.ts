import { Router } from "express";
import { productRoutes } from "../routes/product-routes";

export const route = Router();

route.use('/products', productRoutes)
route.use('', productRoutes )