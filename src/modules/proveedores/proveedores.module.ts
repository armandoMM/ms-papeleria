import { Module } from '@nestjs/common';
import { ProveedoresController } from './proveedores.controller';
import { Proveedor } from './proveedores.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Proveedor])],
  providers: [ProveedoresController],
  controllers: [ProveedoresController],
})
export class ProveedoresModule {}
