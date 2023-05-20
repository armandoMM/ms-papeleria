import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Marca } from './marcas.entity';
import { Repository } from 'typeorm';
import { CreateMarcaDto, UpdateMarcaDto } from './dto';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca) private marcaRepository: Repository<Marca>,
  ) {}

  async createMarca(marca: CreateMarcaDto) {
    const newMarca = await this.marcaRepository.create(marca);
    return this.marcaRepository.save(newMarca);
  }

  getAllMarcas() {
    return this.marcaRepository.find();
  }

  async updateMarca(marca: UpdateMarcaDto) {
    const m = await this.marcaRepository.find({
      where: {
        nombre: marca.nombre,
      },
    });
    if (!m) {
      throw new NotFoundException('Marca no encontrada');
    }
    return this.marcaRepository.update(m[0].id, marca);
  }
  async deleteMarca(id: number) {
    return await this.marcaRepository.delete({ id });
  }
}
