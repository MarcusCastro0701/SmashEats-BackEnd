import cors from 'cors';
import express, { Express } from 'express';
import { connectDb, disconnectDB, loadEnv } from '@/config';
import { categoriesRouter, ordersRouter, productsRouter } from '@/routers';
import 'express-async-errors';
import 'reflect-metadata';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/categories', categoriesRouter)
  .use('/products', productsRouter)
  .use('/orders', ordersRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
