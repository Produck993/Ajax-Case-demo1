"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const product_routes_1 = require("../routes/product-routes");
exports.route = (0, express_1.Router)();
exports.route.use('/products', product_routes_1.productRoutes);
exports.route.use('', product_routes_1.productRoutes);
//# sourceMappingURL=route.js.map