import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'root',
  database: 'test',
  synchronize: true,
  autoLoadEntities: true,
  entities: ['../entity/src/**/*.entity.{ts,js}'],
});
