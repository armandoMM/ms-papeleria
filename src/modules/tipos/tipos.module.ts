import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposController } from './tipos.controller';
import { Tipo } from './tipos.entity';
import { TiposService } from './tipos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tipo])],
  controllers: [TiposController],
  providers: [TiposService],
})
export class TiposModule {}
