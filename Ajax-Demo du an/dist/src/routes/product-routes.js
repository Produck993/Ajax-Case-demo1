"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product-controller"));
exports.productRoutes = (0, express_1.Router)();
exports.productRoutes.get('', product_controller_1.default.getAll);
exports.productRoutes.post('', product_controller_1.default.addProduct);
exports.productRoutes.delete('/:id', product_controller_1.default.deleteProduct);
//# sourceMappingURL=product-routes.js.map