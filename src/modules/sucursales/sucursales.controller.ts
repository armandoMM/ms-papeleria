import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SucursalesService } from './sucursales.service';
import { CreateSucursalDto, UpdateSucursalDto } from './dto';
import { Sucursal } from './sucursales.entity';

@Controller('sucursales')
export class SucursalesController {
  constructor(private sucursalService: SucursalesService) {}

  @Post()
  createSucursal(@Body() newSucursal: CreateSucursalDto) {
    return this.sucursalService.createSucursal(newSucursal);
  }

  @Get()
  getSucursal(@Query('nombre') nombre: string): Promise<Sucursal> {
    return this.sucursalService.getSucursal(nombre);
  }

  @Get()
  getAllSucursales(): Promise<Sucursal[]> {
    return this.sucursalService.getAllSucursales();
  }

  @Post('/update-sucursal')
  updateSucursal(@Body() currentSucursal: UpdateSucursalDto) {
    return this.sucursalService.updateSucursal(currentSucursal);
  }

  @Post('/delete-sucursal')
  deleteSucursal(@Body('id') id: number) {
    return this.sucursalService.deleteSucursal(id);
  }
}
