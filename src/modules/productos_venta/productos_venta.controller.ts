import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductosVentaService } from './productos_venta.service';
import { CreateProductoVentaDto, UpdateProductoVentaDto } from './dto';
import { ProductosVenta } from './productos_venta.entity';

@Controller('productos-venta')
export class ProductosVentaController {
  constructor(private prodsVentaService: ProductosVentaService) {}

  @Post()
  createProdVenta(
    @Body() newProdVenta: CreateProductoVentaDto,
  ): Promise<ProductosVenta> {
    return this.prodsVentaService.createProdVenta(newProdVenta);
  }

  @Get()
  getProdVenta(@Query('id') id: number) {
    return this.prodsVentaService.getProdVenta(id);
  }

  @Get('/all')
  getAllProdsVentas(): Promise<ProductosVenta[]> {
    return this.prodsVentaService.getAllProdsVentas();
  }

  @Post('/update-prod-ventas')
  updateProdVenta(@Body() currentUser: UpdateProductoVentaDto) {
    return this.prodsVentaService.updateProdVenta(currentUser);
  }

  @Post('/delete-prod-ventas')
  deleteProdVenta(@Body('id') id: number) {
    return this.prodsVentaService.deleteProdVenta(id);
  }
}
