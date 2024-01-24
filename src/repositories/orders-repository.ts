import { prisma } from '@/config';

async function retrieveOrders() {
  return prisma.orders.findMany();
}

async function insertOrder(
  productId: number,
  quantity: number,
  observations: string,
  clientName: string,
  code: number,
  ready: boolean,
) {
  return prisma.orders.create({
    data: {
      productId,
      quantity,
      observations,
      clientName,
      code,
      ready,
    },
  });
}

async function updateOrder(orderId: number) {
  return prisma.orders.update({
    where: {
      id: orderId,
    },
    data: {
      ready: true,
    },
  });
}

async function findOrderById(orderId: number) {
  return prisma.orders.findUnique({
    where: {
      id: orderId,
    },
  });
}

async function deleteOrderById(orderId: number) {
  return prisma.orders.delete({
    where: {
      id: orderId,
    },
  });
}

const ordersRepository = {
  retrieveOrders,
  insertOrder,
  updateOrder,
  findOrderById,
  deleteOrderById,
};

export default ordersRepository;
