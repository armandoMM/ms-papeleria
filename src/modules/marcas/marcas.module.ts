import { Module } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { MarcasController } from './marcas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './marcas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Marca])],
  providers: [MarcasService],
  controllers: [MarcasController],
})
export class MarcasModule {}
