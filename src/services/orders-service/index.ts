import { notFoundError } from '@/errors';
import ordersRepository from '@/repositories/orders-repository';

async function findAllOrders() {
  const response = await ordersRepository.retrieveOrders();
  if (!response) {
    throw notFoundError();
  }

  return response;
}

export const ordersService = {
  findAllOrders,
};
