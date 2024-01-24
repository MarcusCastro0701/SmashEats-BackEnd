import httpStatus from 'http-status';
import supertest from 'supertest';
import app, { init } from '@/app';
import { createCategorie, createProduct } from '../factories';
import { cleanDb } from '../helpers';

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('GET /products', () => {
  it('should respond with status 200 if there is no products yet', async () => {
    const response = await server.get('/products');

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual([]);
  });

  it('should respond with status 200 and products data if there is products', async () => {
    await createCategorie();
    await createProduct();

    const response = await server.get('/products');

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body.length).toEqual(1);
  });
});
