import express, { Request, Response } from 'express';
import path from 'path';
const router = express.Router();
const rootDir = path.join(__dirname, '..', '..');

router.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

export default router;
