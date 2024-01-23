import { Router } from 'express';
import { allProducts } from '@/controllers/products-controller';

const productsRouter = Router();

productsRouter.get('/', allProducts);

export { productsRouter };
