import { Module } from '@nestjs/common';
import { ProveedoresController } from './proveedores.controller';
import { Proveedor } from './proveedores.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedoresService } from './proveedores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Proveedor])],
  providers: [ProveedoresService],
  controllers: [ProveedoresController],
})
export class ProveedoresModule {}
