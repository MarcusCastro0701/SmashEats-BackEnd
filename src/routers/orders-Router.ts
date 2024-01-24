import { Router } from 'express';
import { allOrders, deleteFromOrders, insertOrder, print, setReady } from '@/controllers/orders-controller';

const ordersRouter = Router();

ordersRouter
  .get('/', allOrders)
  .post('/', insertOrder)
  .post('/print', print)
  .put('/:orderId', setReady)
  .delete('/:orderId', deleteFromOrders);

export { ordersRouter };
