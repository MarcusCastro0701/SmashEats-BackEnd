import { notFoundError } from '@/errors';
import productsRepository from '@/repositories/products-repository';

async function findAllProducts() {
  const response = await productsRepository.retrieveProducts();
  if (!response) {
    throw notFoundError();
  }

  return response;
}

export const categoriesService = {
  findAllProducts,
};
