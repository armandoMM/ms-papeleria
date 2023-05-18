import { Module } from '@nestjs/common';
import { ProductosVentaController } from './productos_venta.controller';
import { ProductosVentaService } from './productos_venta.service';

@Module({
  controllers: [ProductosVentaController],
  providers: [ProductosVentaService]
})
export class ProductosVentaModule {}
