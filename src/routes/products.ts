import express, { Request, Response } from 'express';
import path from 'path';
import Product from '../models/Product';

const router = express.Router();
const rootDir = path.join(__dirname, '..', '..');

router.get('/', (req: Request, res: Response) => {
  const products = Product.fetchAll();
  res.json(products);
});

router.post('/', (req: Request, res: Response) => {
  const { id, title, price, description } = req.body;
  const newProduct = new Product(id, title, price, description);
  newProduct.save();
  res.status(201).json({ message: 'Product created', product: newProduct });
});

router.get('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const product = Product.findById(productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.put('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  const { title, price, description } = req.body;
  let product = Product.findById(productId);
  if (product) {
    product.title = title;
    product.price = price;
    product.description = description;
    product.update();
    res.json({ message: 'Product updated', product });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.delete('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id, 10);
  try {
    Product.deleteById(productId);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(404).json({ message: 'An unknown error occurred.' });
    }
  }
});

export default router;
