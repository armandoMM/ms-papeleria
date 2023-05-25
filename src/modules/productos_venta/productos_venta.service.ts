import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductosVenta } from './productos_venta.entity';
import { Repository } from 'typeorm';
import { CreateProductoVentaDto, UpdateProductoVentaDto } from './dto';

@Injectable()
export class ProductosVentaService {
  constructor(
    @InjectRepository(ProductosVenta)
    private prodVentaRepository: Repository<ProductosVenta>,
  ) {}

  async createProdVenta(prodVenta: CreateProductoVentaDto) {
    const newPV = await this.prodVentaRepository.create(prodVenta);
    return this.prodVentaRepository.save(newPV);
  }

  getAllProdsVentas() {
    return this.prodVentaRepository.find({
      relations: {
        venta_id: true,
        producto_id: true,
      },
    });
  }

  async getProdVenta(id: number) {
    const pv = await this.prodVentaRepository.find({
      where: {
        id,
      },
    });
    return pv[0];
  }

  async updateProdVenta(prodVenta: UpdateProductoVentaDto) {
    const pv = await this.prodVentaRepository.find({
      where: {
        id: prodVenta.id,
      },
    });
    if (!pv) {
      throw new NotFoundException('No se encontraron datos de la venta');
    }
    return this.prodVentaRepository.update(pv[0].id, prodVenta);
  }

  async deleteProdVenta(id: number) {
    return await this.prodVentaRepository.delete({ id });
  }
}
