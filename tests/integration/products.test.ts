import httpStatus from 'http-status';
import supertest from 'supertest';
import app, { init } from '@/app';
import { createProduct } from '../factories';
import { cleanDb } from '../helpers';

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('GET /products', () => {
  it('should respond with status 404 if there is no products', async () => {
    const response = await server.get('/products');

    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });

  it('should respond with status 200 and products data if there is products', async () => {
    const product = await createProduct();

    const response = await server.get('/products');

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual({
      id: product.id,
      categoryId: product.categoryId,
      name: product.name,
      price: product.price,
      ImageUrl: product.ImageUrl,
      description: product.description,
      isExtra: product.isExtra,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  });
});
