import faker from '@faker-js/faker';
import { products } from '@prisma/client';
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
