import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tipo } from './tipos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TiposService {
  constructor(
    @InjectRepository(Tipo) private tipoRespository: Repository<Tipo>,
  ) {}
  async getAllTipos() {
    return await this.tipoRespository.find({
      select: { id: true, tipo: true },
    });
  }
}
