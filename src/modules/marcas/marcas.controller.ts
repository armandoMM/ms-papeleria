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

  @Get('/all')
  getAllMarcas(): Promise<Marca[]> {
    return this.marcaService.getAllMarcas();
  }

  @Post('/update-marca')
  updateMarca(@Body() currentMarca: UpdateMarcaDto) {
    return this.marcaService.updateMarca(currentMarca);
  }

  @Post('/delete-marca')
  deleteMarca(@Body('id') id: number) {
    return this.marcaService.deleteMarca(id);
  }
}
