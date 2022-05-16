import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductEntity } from '@app/entity/product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  exports: [TypeOrmModule],
})
export class ProductEntityModule {}
