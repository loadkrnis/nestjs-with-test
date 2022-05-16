import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderEntity } from '@app/entity/order/order.entity';
import { UserEntity } from '@app/entity/user/user.entity';
import { ProductEntity } from '@app/entity/product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, UserEntity, ProductEntity])],
  exports: [TypeOrmModule],
})
export class OrderEntityModule {}
