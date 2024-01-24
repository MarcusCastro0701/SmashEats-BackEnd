import faker from '@faker-js/faker';
import { categories } from '@prisma/client';
import dayjs from 'dayjs';
import { prisma } from '@/config';

export function createCategorie(params: Partial<categories> = {}): Promise<categories> {
  return prisma.categories.create({
    data: {
      name: params.name || faker.commerce.product(),
      ImageUrl: params.ImageUrl || faker.image.imageUrl(),
      createdAt: params.createdAt || dayjs().subtract(1, 'day').toDate(),
      updatedAt: params.updatedAt || dayjs().add(5, 'days').toDate(),
    },
  });
}
