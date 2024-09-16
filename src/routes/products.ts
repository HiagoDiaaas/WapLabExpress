import express, { Request, Response } from 'express';
import path from 'path';
const router = express.Router();
const rootDir = path.join(__dirname, '..', '..');

router.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(rootDir, 'views', 'products.html'));
});

router.post('/', (req: Request, res: Response) => {
  const productname = req.body.productname;
  res.send(`Product ${productname} received`);
});

export default router;
