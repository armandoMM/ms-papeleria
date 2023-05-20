import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { CreateMarcaDto, UpdateMarcaDto } from './dto';
import { Marca } from './marcas.entity';

@Controller('marcas')
export class MarcasController {
  constructor(private marcaService: MarcasService) {}

  @Post()
  createMarca(@Body() newMarca: CreateMarcaDto) {
    return this.marcaService.createMarca(newMarca);
  }

  @Get()
  getAllMarcas(): Promise<Marca[]> {
    return this.marcaService.getAllMarcas();
  }

  @Post('/update-marca')
  updateUser(@Body() currentUser: UpdateMarcaDto) {
    return this.marcaService.updateMarca(currentUser);
  }

  @Post('/delete-marca')
  deleteUser(@Body('id') id: number) {
    return this.marcaService.deleteMarca(id);
  }
}
