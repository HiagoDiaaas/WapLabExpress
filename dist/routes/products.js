"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const Product_1 = __importDefault(require("../models/Product"));
const router = express_1.default.Router();
const rootDir = path_1.default.join(__dirname, '..', '..');
router.get('/', (req, res) => {
    const products = Product_1.default.fetchAll();
    res.json(products);
});
router.post('/', (req, res) => {
    const { id, title, price, description } = req.body;
    const newProduct = new Product_1.default(id, title, price, description);
    newProduct.save();
    res.status(201).json({ message: 'Product created', product: newProduct });
});
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = Product_1.default.findById(productId);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
});
router.put('/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const { title, price, description } = req.body;
    let product = Product_1.default.findById(productId);
    if (product) {
        product.title = title;
        product.price = price;
        product.description = description;
        product.update();
        res.json({ message: 'Product updated', product });
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
});
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    try {
        Product_1.default.deleteById(productId);
        res.json({ message: 'Product deleted' });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        }
        else {
            res.status(404).json({ message: 'An unknown error occurred.' });
        }
    }
});
exports.default = router;
//# sourceMappingURL=products.js.map