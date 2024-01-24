import { notFoundError, requestError } from '@/errors';
import ordersRepository from '@/repositories/orders-repository';

async function findAllOrders() {
  const response = await ordersRepository.retrieveOrders();
  if (!response) {
    throw notFoundError();
  }

  return response;
}

async function orderSet(orderId: number) {
  const findById = await ordersRepository.findOrderById(orderId);
  if (findById === null) {
    throw notFoundError();
  }

  const response = await ordersRepository.updateOrder(orderId);
  if (!response) {
    throw requestError(400, 'Bad Request');
  }

  return response;
}

async function deleteOrder(orderId: number) {
  const findById = await ordersRepository.findOrderById(orderId);
  if (!findById) {
    throw notFoundError();
  }

  const response = await ordersRepository.deleteOrderById(orderId);
  if (!response) {
    throw requestError(400, 'Bad Request');
  }

  return response;
}

async function addOrder(
  productId: number,
  quantity: number,
  observations: string,
  clientName: string,
  code: number,
  ready: boolean,
) {
  const response = await ordersRepository.insertOrder(productId, quantity, observations, clientName, code, ready);

  if (!response) {
    throw requestError(400, 'Bad Request');
  }

  return response;
}

export const ordersService = {
  findAllOrders,
  addOrder,
  orderSet,
  deleteOrder,
};
