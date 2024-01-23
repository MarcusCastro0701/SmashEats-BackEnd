import { notFoundError } from '@/errors';
import categoriesRepository from '@/repositories/categories-repository';

async function findAllCategories() {
  const response = await categoriesRepository.retrieveCategories();
  if (!response) {
    throw notFoundError();
  }

  return response;
}

export const categoriesService = {
  findAllCategories,
};
