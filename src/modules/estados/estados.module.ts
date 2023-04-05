import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadosController } from './estados.controller';
import { Estado } from './estados.entity';
import { EstadosService } from './estados.service';

@Module({
  imports: [TypeOrmModule.forFeature([Estado])],
  controllers: [EstadosController],
  providers: [EstadosService],
})
export class EstadosModule {}
