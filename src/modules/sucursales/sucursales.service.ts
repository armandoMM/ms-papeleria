import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sucursal } from './sucursales.entity';
import { Repository } from 'typeorm';
import { CreateSucursalDto, UpdateSucursalDto } from './dto';

@Injectable()
export class SucursalesService {
  constructor(
    @InjectRepository(Sucursal)
    private sucursalRepository: Repository<Sucursal>,
  ) {}

  async createSucursal(sucursal: CreateSucursalDto) {
    const newSucursal = await this.sucursalRepository.create(sucursal);
    return this.sucursalRepository.save(newSucursal);
  }

  getAllSucursales() {
    return this.sucursalRepository.find();
  }

  async getSucursal(nombre: string) {
    const suc = await this.sucursalRepository.find({
      where: {
        nombre,
      },
    });
    return suc[0];
  }

  async updateSucursal(sucursal: UpdateSucursalDto) {
    const suc = await this.sucursalRepository.find({
      where: {
        nombre: sucursal.nombre,
      },
    });
    if (!suc) {
      throw new NotFoundException('Sucursal no encontrada');
    }
    return this.sucursalRepository.update(suc[0].id, sucursal);
  }

  async deleteSucursal(id: number) {
    return await this.sucursalRepository.delete({ id });
  }
}
