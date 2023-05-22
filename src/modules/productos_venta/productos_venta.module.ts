import { Module } from '@nestjs/common';
import { ProductosVentaController } from './productos_venta.controller';
import { ProductosVentaService } from './productos_venta.service';
import { ProductosVenta } from './productos_venta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosVenta])],
  controllers: [ProductosVentaController],
  providers: [ProductosVentaService],
})
export class ProductosVentaModule {}
