import { prisma } from '@/config';

async function retrieveProducts() {
  return prisma.products.findMany();
}

const productsRepository = {
  retrieveProducts,
};

export default productsRepository;
