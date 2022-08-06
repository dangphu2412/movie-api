import { Module } from '@nestjs/common';
import { CastController } from './cast.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CastRepository } from './cast.repository';
import { CastServiceToken } from './client/cast.service';
import { CastServiceImpl } from './cast.service';

@Module({
  imports: [TypeOrmModule.forFeature([CastRepository])],
  controllers: [CastController],
  providers: [
    {
      provide: CastServiceToken,
      useClass: CastServiceImpl,
    },
  ],
})
export class CastModule {}
