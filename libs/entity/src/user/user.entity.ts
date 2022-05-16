import { Column, Entity } from 'typeorm';
import { BaseTimeEntity } from '@app/entity/BaseTimeEntity';

@Entity({ name: 'user' })
export class UserEntity extends BaseTimeEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  address: string;
}
