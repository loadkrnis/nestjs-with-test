import { Module } from '@nestjs/common';
import { DatabaseModule } from '../libs/db/database.module';
import { OrderEntityModule } from '@app/entity/order/order.entity.module';

@Module({
  imports: [DatabaseModule, OrderEntityModule],
})
export class AppModule {}
