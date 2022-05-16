import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { BaseTimeEntity } from '@app/entity/BaseTimeEntity';
import { UserEntity } from '@app/entity/user/user.entity';
import { ProductEntity } from '@app/entity/product/product.entity';
import { PayMethod } from '@app/entity/order/type/PayMethod';
import { OrderStatus } from '@app/entity/order/type/OrderStatus';

@Entity({ name: 'order' })
export class OrderEntity extends BaseTimeEntity {
  @ManyToOne(() => UserEntity, (user) => user.id)
  user: UserEntity;

  @OneToOne(() => ProductEntity, (product) => product.id)
  product: ProductEntity;

  @Column({ type: 'varchar' })
  payMethod: PayMethod;

  @Column()
  payPrice: number;

  @Column({ type: 'varchar' })
  status: OrderStatus;
}
