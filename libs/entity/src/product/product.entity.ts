import { Column, Entity } from 'typeorm';
import { BaseTimeEntity } from '@app/entity/BaseTimeEntity';

@Entity({ name: 'product' })
export class ProductEntity extends BaseTimeEntity {
  @Column()
  name: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column()
  orderCount: number;
}
