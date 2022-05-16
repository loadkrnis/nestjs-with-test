import { Module } from '@nestjs/common';
import { DatabaseModule } from '../libs/db/database.module';
import { OrderEntityModule } from '@app/entity/order/order.entity.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [DatabaseModule, OrderEntityModule, OrdersModule],
})
export class AppModule {}
