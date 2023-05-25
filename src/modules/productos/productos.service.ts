import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './productos.entity';
import { Repository } from 'typeorm';
import { CreateProductoDto, UpdateProductoDto } from './dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async createProducto(producto: CreateProductoDto) {
    const prod = await this.productoRepository.create(producto);
    return this.productoRepository.save(prod);
  }

  getAllProductos() {
    return this.productoRepository.find({
      relations: {
        marca_id: true,
        categoria_id: true,
        proveedor_id: true,
      },
    });
  }

  async getProducto(nombre: string) {
    const prod = await this.productoRepository.find({
      where: {
        nombre,
      },
    });
    return prod[0];
  }

  async updateProducto(producto: UpdateProductoDto) {
    const prod = await this.productoRepository.find({
      where: {
        nombre: producto.nombre,
      },
    });
    if (!prod) {
      throw new NotFoundException('Producto no encontrado');
    }
    return this.productoRepository.update(prod[0].id, producto);
  }

  async deleteProducto(id: number) {
    return await this.productoRepository.delete({ id });
  }
}
