import express, { Request, Response } from 'express';
import path from 'path';
const router = express.Router();
const rootDir = path.join(__dirname, '..', '..');

router.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

router.post('/', (req: Request, res: Response) => {
  const username = req.body.username;
  res.send(`User ${username} received`);
});

export default router;
