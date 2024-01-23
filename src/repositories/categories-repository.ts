import { prisma } from '@/config';

async function retrieveCategories() {
  return prisma.categories.findMany();
}

const categoriesRepository = {
  retrieveCategories,
};

export default categoriesRepository;
