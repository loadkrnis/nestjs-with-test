import { Module } from '@nestjs/common';
import { DatabaseModule } from '../libs/db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
