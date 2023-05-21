import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto, UpdateVentaDto } from './dto';
import { Venta } from './ventas.entity';

@Controller('ventas')
export class VentasController {
  constructor(private ventaService: VentasService) {}

  @Post()
  createVenta(@Body() newVenta: CreateVentaDto) {
    return this.ventaService.createVenta(newVenta);
  }

  @Get()
  getVenta(@Query('fecha_registro') fecha_registro: string): Promise<Venta> {
    return this.ventaService.getVenta(fecha_registro);
  }

  @Get()
  getAllVentas(): Promise<Venta[]> {
    return this.ventaService.getAllVentas();
  }

  @Post('/update-venta')
  updateVenta(@Body() currentVenta: UpdateVentaDto) {
    return this.ventaService.updateVenta(currentVenta);
  }

  @Post('/delete-venta')
  deleteVenta(@Body('id') id: number) {
    return this.ventaService.deleteVenta(id);
  }
}
