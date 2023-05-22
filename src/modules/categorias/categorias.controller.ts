import { Body, Controller, Get, Post } from '@nestjs/common';
import { Categoria } from './categorias.entity';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto, UpdateCategoriaDto } from './dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriaService: CategoriasService) {}

  @Post()
  createCategoria(@Body() newCategoria: CreateCategoriaDto) {
    return this.categoriaService.createCategoria(newCategoria);
  }

  @Get('/all')
  getAllCategorias(): Promise<Categoria[]> {
    return this.categoriaService.getAllCategorias();
  }

  @Post('/update-categoria')
  updateCategoria(@Body() currentUser: UpdateCategoriaDto) {
    return this.categoriaService.updateCategoria(currentUser);
  }

  @Post('/delete-categoria')
  deleteCategoria(@Body('id') id: number) {
    return this.categoriaService.deleteCategoria(id);
  }
}
