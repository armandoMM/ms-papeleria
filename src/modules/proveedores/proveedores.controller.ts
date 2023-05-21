import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { CreateProveedorDto, UpdateProveedorDto } from './dto';
import { Proveedor } from './proveedores.entity';

@Controller('proveedores')
export class ProveedoresController {
  constructor(private proveedorService: ProveedoresService) {}

  @Post()
  createProveedor(@Body() newProveedor: CreateProveedorDto) {
    return this.proveedorService.createProveedor(newProveedor);
  }

  @Get()
  getProveedor(@Query('nombre') nombre: string): Promise<Proveedor> {
    return this.proveedorService.getProveedor(nombre);
  }

  @Get()
  getAllProveedores(): Promise<Proveedor[]> {
    return this.proveedorService.getAllProveedores();
  }

  @Post('/update-proveedor')
  updateProveedor(@Body() currentProveedor: UpdateProveedorDto) {
    return this.proveedorService.updateProveedor(currentProveedor);
  }

  @Post('/delete-proveedor')
  deleteProveedor(@Body('id') id: number) {
    return this.proveedorService.deleteProveedor(id);
  }
}
