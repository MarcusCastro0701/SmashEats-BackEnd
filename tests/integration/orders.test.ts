import httpStatus from 'http-status';
import supertest from 'supertest';
import app, { init } from '@/app';
import { createCategorie, createOrder, createProduct } from '../factories';
import { cleanDb } from '../helpers';

beforeAll(async () => {
  await init();
  await cleanDb();
});

const server = supertest(app);

describe('GET /orders', () => {
  it('should respond with status 404 if there is no orders', async () => {
    const response = await server.get('/orders');

    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });

  it('should respond with status 200 and orders data if there is orders', async () => {
    const order = await createOrder();

    const response = await server.get('/orders');

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual({
      id: order.id,
      productId: order.productId,
      quantity: order.quantity,
      observations: order.observations,
      clientName: order.clientName,
      code: order.code,
      ready: order.ready,
    });
  });
});

describe('post /orders', () => {
  it('should respond with status 500 if there is no body', async () => {
    const response = await server.post('/orders');

    expect(response.status).toBe(httpStatus.INTERNAL_SERVER_ERROR);
  });

  it('should respond with status 200 if the order was inserted', async () => {
    await createCategorie();
    await createProduct();
    const order = await createOrder();

    const body = {
      productId: order.productId,
      quantity: order.quantity,
      observations: order.observations,
      clientName: order.clientName,
      code: order.code,
      readu: order.ready,
    };

    const response = await server.get('/orders').send(body);

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual({
      id: order.id,
      productId: order.productId,
      quantity: order.quantity,
      observations: order.observations,
      clientName: order.clientName,
      code: order.code,
      ready: order.ready,
    });
  });
});

describe('put /orders', () => {
  it('should respond with status 404 if there is no order with the sent id', async () => {
    await createCategorie();
    await createProduct();
    await createOrder();

    const response = await server.put(`/orders/${1000000000}`);

    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });

  it('should respond with status 200 there is an order with the sent id', async () => {
    await createCategorie();
    await createProduct();
    const order = await createOrder();

    const response = await server.put(`/orders/${order.id}`);

    expect(response.status).toBe(httpStatus.OK);
  });
});

describe('delete /orders', () => {
  it('should respond with status 404 if there is no order with the sent id', async () => {
    await createCategorie();
    await createProduct();
    await createOrder();

    const response = await server.delete(`/orders/${1000000000}`);

    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });

  it('should respond with status 200 there is an order with the sent id', async () => {
    await createCategorie();
    await createProduct();
    const order = await createOrder();

    const response = await server.delete(`/orders/${order.id}`);

    expect(response.status).toBe(httpStatus.OK);
  });
});
