import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto, UpdateProductoDto } from './dto';
import { Producto } from './productos.entity';

@Controller('productos')
export class ProductosController {
  constructor(private productoService: ProductosService) {}

  @Post()
  createProducto(@Body() newProducto: CreateProductoDto) {
    return this.productoService.createProducto(newProducto);
  }

  @Get()
  getProducto(@Query('nombre') nombre: string): Promise<Producto> {
    return this.productoService.getProducto(nombre);
  }

  @Get('/all')
  getAllProductos(): Promise<Producto[]> {
    return this.productoService.getAllProductos();
  }

  @Post('/update-producto')
  updateUserProducto(@Body() currentProducto: UpdateProductoDto) {
    return this.productoService.updateProducto(currentProducto);
  }

  @Post('/delete-producto')
  deleteProducto(@Body('id') id: number) {
    return this.productoService.deleteProducto(id);
  }
}
