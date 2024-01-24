import faker from '@faker-js/faker';
import { categories } from '@prisma/client';
import { prisma } from '@/config';

export function createCategorie(params: Partial<categories> = {}): Promise<categories> {
  return prisma.categories.create({
    data: {
      name: params.name || faker.commerce.product(),
      ImageUrl: params.ImageUrl || faker.image.imageUrl(),
    },
  });
}
