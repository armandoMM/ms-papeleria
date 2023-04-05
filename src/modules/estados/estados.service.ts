import { Injectable } from '@nestjs/common';
import { Estado } from './estados.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstadosService {
  constructor(
    @InjectRepository(Estado) private estadoRepository: Repository<Estado>,
  ) {}
  async getAllEstados() {
    return await this.estadoRepository.find({
      select: { id: true, nombre: true },
    });
  }
}
