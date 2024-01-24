import httpStatus from 'http-status';
import supertest from 'supertest';
import app, { init } from '@/app';
import { createCategorie } from '../factories';
import { cleanDb } from '../helpers';

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('GET /categories', () => {
  it('should respond with status 200 if there is no categories yet', async () => {
    const response = await server.get('/orders');

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual([]);
  });

  it('should respond with status 200 and categories data if there is categories', async () => {
    await createCategorie();

    const response = await server.get('/categories');

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body.length).toEqual(1);
  });
});
