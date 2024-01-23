import { Router } from 'express';
import { allOrders } from '@/controllers/orders-controller';

const ordersRouter = Router();

ordersRouter.get('/', allOrders);

export { ordersRouter };
