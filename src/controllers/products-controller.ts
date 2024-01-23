import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { productsService } from '@/services';

export async function allProducts(req: Request, res: Response) {
  try {
    const response = await productsService.findAllProducts();
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if (error.status === 404) {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
