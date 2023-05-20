import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tipo } from './tipos.entity';
import { Repository } from 'typeorm';
import { CreateTipoDto, UpdateTipoDto } from './dto';

@Injectable()
export class TiposService {
  constructor(
    @InjectRepository(Tipo) private tipoRepository: Repository<Tipo>,
  ) {}

  async createTipo(Tipo: CreateTipoDto) {
    const newTipo = await this.tipoRepository.create(Tipo);
    return this.tipoRepository.save(newTipo);
  }

  async getAllTipos() {
    return await this.tipoRepository.find({
      select: { id: true, tipo: true },
    });
  }

  async updateTipo(tipo: UpdateTipoDto) {
    const type = await this.tipoRepository.find({
      where: {
        tipo: tipo.tipo,
      },
    });
    if (!type) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return this.tipoRepository.update(type[0].id, tipo);
  }

  async deleteTipo(id: number) {
    return await this.tipoRepository.delete({ id });
  }
}
