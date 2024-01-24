import faker from '@faker-js/faker';
import { products } from '@prisma/client';
import dayjs from 'dayjs';
import { prisma } from '@/config';

export async function createProduct(params: Partial<products> = {}): Promise<products> {
  const response = await prisma.categories.findFirst();
  const { id } = response;
  return prisma.products.create({
    data: {
      categoryId: params.categoryId || id,
      name: params.name || faker.commerce.product(),
      price: params.price || faker.commerce.price(),
      ImageUrl: params.ImageUrl || faker.image.imageUrl(),
      description: params.description || faker.lorem.sentence(5),
      isExtra: params.isExtra || false,
      createdAt: params.createdAt || dayjs().subtract(1, 'day').toDate(),
      updatedAt: params.updatedAt || dayjs().add(5, 'days').toDate(),
    },
  });
}

// id        Int      @id @default(autoincrement())
//   categoryId Int
//   name      String   @unique @db.VarChar(255)
//   price     String   @db.VarChar(255)
//   ImageUrl       String   @db.VarChar(255)
//   description   String
//   isExtra   Boolean   @default(false)
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
