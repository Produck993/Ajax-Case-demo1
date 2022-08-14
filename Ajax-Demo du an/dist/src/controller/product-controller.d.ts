import { Request, Response } from "express";
declare class ProductController {
    getAll: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
