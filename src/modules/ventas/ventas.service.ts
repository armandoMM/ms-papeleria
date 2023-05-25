import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './ventas.entity';
import { CreateVentaDto, UpdateVentaDto } from './dto';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta) private ventaRepository: Repository<Venta>,
  ) {}

  async createVenta(venta: CreateVentaDto) {
    const newVenta = await this.ventaRepository.create(venta);
    return this.ventaRepository.save(newVenta);
  }

  getAllVentas() {
    return this.ventaRepository.find({
      relations: {
        sucursal_id: true,
        usuario_id: true,
      },
    });
  }

  async getVenta(fecha_registro: string) {
    const v = await this.ventaRepository.find({
      where: {
        fecha_registro,
      },
    });
    return v[0];
  }

  async updateVenta(venta: UpdateVentaDto) {
    const v = await this.ventaRepository.find({
      where: {
        fecha_registro: venta.fecha_registro,
      },
    });
    if (!v) {
      throw new NotFoundException('Venta no existente');
    }
    return this.ventaRepository.update(v[0].id, venta);
  }

  async deleteVenta(id: number) {
    return await this.ventaRepository.delete({ id });
  }
}
