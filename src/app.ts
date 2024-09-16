import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import productsRouter from './routes/products';
import errorHandler from './middleware/errorHandler';

const app = express();
const rootDir = path.join(__dirname, '..');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, 'views')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// Handle 404
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
