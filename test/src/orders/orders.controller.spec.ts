import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../src/app.module';
import { INestApplication } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderEntity } from '@app/entity/order/order.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('OrdersController', () => {
  let app: INestApplication;
  let orderRepository: Repository<OrderEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    orderRepository = module.get(getRepositoryToken(OrderEntity));
    await app.init();
  });

  afterEach(async () => {
    await orderRepository.find();
    await app.close();
  });
});
