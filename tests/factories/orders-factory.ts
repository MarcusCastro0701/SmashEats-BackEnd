import faker from '@faker-js/faker';
import { orders } from '@prisma/client';
import { prisma } from '@/config';

export async function createOrder(params: Partial<orders> = {}): Promise<orders> {
  const response = await prisma.products.findFirst();
  const { id } = response;
  return prisma.orders.create({
    data: {
      productId: params.productId || id,
      quantity: params.quantity || 1,
      observations: params.observations || faker.lorem.sentence(5),
      clientName: params.clientName || faker.name.firstName(),
      code: params.code || 1,
      ready: params.ready || false,
    },
  });
}

// id     Int      @id @default(autoincrement())
//   productId   Int
//   quantity Int
//   observations  String
//   clientName   String
//   code   Int
//   ready  Boolean  @default(false)
