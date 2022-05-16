import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../../../src/orders/orders.service';
import { OrdersModule } from '../../../src/orders/orders.module';
import { DatabaseModule } from '../../../libs/db/database.module';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [OrdersModule, DatabaseModule],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
