import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OrderDto } from './order.dto';

@Injectable()
export class OrdersService {
  constructor(@Inject('ORDERS_SERVICE') private rabbitClient: ClientProxy) {}

  placeOrder(order: OrderDto) {
    this.rabbitClient.emit('order-placed', order);

    return { message: 'Order Placed!' };
  }

  getOrders() {
    return this.rabbitClient.send({ cmd: 'fetch-orders' }, {});
  }
}
