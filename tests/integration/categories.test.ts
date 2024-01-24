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
  it('should respond with status 404 if there is no categories', async () => {
    const response = await server.get('/orders');

    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });

  it('should respond with status 200 and categories data if there is categories', async () => {
    const categorie = await createCategorie();

    const response = await server.get('/categories');

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual({
      id: categorie.id,
      name: categorie.name,
      ImageUrl: categorie.ImageUrl,
      createdAt: categorie.createdAt,
      updatedAt: categorie.createdAt,
    });
  });
});
