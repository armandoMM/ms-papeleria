import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './categorias.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaDto, UpdateCategoriaDto } from './dto';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async createCategoria(categoria: CreateCategoriaDto) {
    const newCat = await this.categoriaRepository.create(categoria);
    return this.categoriaRepository.save(newCat);
  }

  getAllCategorias() {
    return this.categoriaRepository.find();
  }

  async updateCategoria(categoria: UpdateCategoriaDto) {
    const categ = await this.categoriaRepository.find({
      where: {
        id: categoria.id,
      },
    });
    if (!categ) {
      throw new NotFoundException('Categoria no encontrada');
    }
    return this, this.categoriaRepository.update(categ[0].id, categoria);
  }

  async deleteCategoria(id: number) {
    return await this.categoriaRepository.delete({ id });
  }
}
