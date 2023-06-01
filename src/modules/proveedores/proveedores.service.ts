import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedor } from './proveedores.entity';
import { Repository } from 'typeorm';
import { CreateProveedorDto, UpdateProveedorDto } from './dto';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(Proveedor)
    private proveedorRepository: Repository<Proveedor>,
  ) {}

  async createProveedor(proveedor: CreateProveedorDto) {
    const newProveedor = await this.proveedorRepository.create(proveedor);
    return this.proveedorRepository.save(newProveedor);
  }

  getAllProveedores() {
    return this.proveedorRepository.find({
      relations: {
        estado_id: true,
      },
    });
  }

  async getProveedor(nombre: string) {
    const prov = await this.proveedorRepository.find({
      where: {
        nombre,
      },
    });
    return prov[0];
  }

  async updateProveedor(proveedor: UpdateProveedorDto) {
    const prov = await this.proveedorRepository.find({
      where: {
        id: proveedor.id,
      },
    });
    if (!prov) {
      throw new NotFoundException('Proveedor no encontrado');
    }
    return this.proveedorRepository.update(prov[0].id, proveedor);
  }

  async deleteProveedor(id: number) {
    return await this.proveedorRepository.delete({ id });
  }
}
