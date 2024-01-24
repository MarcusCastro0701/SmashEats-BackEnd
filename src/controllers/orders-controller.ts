/* eslint-disable no-plusplus */
import * as escpos from 'escpos';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ordersService } from '@/services';

export async function print(req: Request, res: Response) {
  const order = req.body;

  try {
    // para a localização do vendorID e do productID, consulte o readme
    const device = new escpos.USB(process.env.VENDOR_ID, process.env.PRODUCT_ID);
    const printer = new escpos.Printer(device);

    device.open();

    printer
      .font('A')
      .align('LT')
      .style('BU')
      .size(1, 1)
      .text(`Pedido #${order.numero}`)
      .text(`Cliente: ${order.cliente}`)
      .text('Itens do Pedido:')
      .text('------------------');

    for (let c = 0; c < Number(order.itens.length) - 1; c++) {
      printer.text(
        ` ${order.itens[c].quantity}x ${order.itens[c].nome} - R$ ${Number(order.itens[c].preco).toFixed(2)}`,
      );
    }

    printer.text(`Total: R$ ${Number(order.totalPrice).toFixed(2)}`);

    printer.cut().close();
    res.status(httpStatus.OK);
  } catch (error) {
    res.send(httpStatus.BAD_REQUEST);
    console.error('Erro ao imprimir:', error);
  }
}

export async function allOrders(req: Request, res: Response) {
  try {
    const response = await ordersService.findAllOrders();
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if (error.status === 404) {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function setReady(req: Request, res: Response) {
  const { orderId } = req.params;

  try {
    const response = await ordersService.orderSet(Number(orderId));
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if (error.name === 'NotFoundError') {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    if (error.status === 409) {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function deleteFromOrders(req: Request, res: Response) {
  const { orderId } = req.params;

  try {
    const response = await ordersService.deleteOrder(Number(orderId));
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if (error.status === 404) {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    if (error.name === 'NotFoundError') {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    if (error.status === 400) {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function insertOrder(req: Request, res: Response) {
  try {
    const response = await ordersService.addOrder(
      req.body.productId,
      req.body.quantity,
      req.body.observations,
      req.body.clientName,
      req.body.code,
      req.body.ready,
    );
    return res.status(httpStatus.OK).send(response);
  } catch (error) {
    if (error.status === 400) {
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
