import { prisma } from '@/config';

async function retrieveOrders() {
  return prisma.orders.findMany();
}

const ordersRepository = {
  retrieveOrders,
};

export default ordersRepository;
