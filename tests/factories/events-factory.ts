import faker from '@faker-js/faker';
import { event } from '@prisma/client';
import dayjs from 'dayjs';
import { prisma } from '@/config';

export function createEvent(params: Partial<event> = {}): Promise<event> {
  return prisma.event.create({
    data: {
      title: params.title || faker.lorem.sentence(),
      backgroundImageUrl: params.backgroundImageUrl || faker.image.imageUrl(),
      logoImageUrl: params.logoImageUrl || faker.image.imageUrl(),
      startsAt: params.startsAt || dayjs().subtract(1, 'day').toDate(),
      endsAt: params.endsAt || dayjs().add(5, 'days').toDate(),
    },
  });
}
