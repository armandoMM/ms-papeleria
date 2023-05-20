import { Body, Controller, Get, Post } from '@nestjs/common';
import { TiposService } from './tipos.service';
import { Tipo } from './tipos.entity';
import { CreateTipoDto, UpdateTipoDto } from './dto';

@Controller('tipos')
export class TiposController {
  constructor(private readonly tiposService: TiposService) {}

  @Post()
  createTipo(@Body() newTipo: CreateTipoDto): Promise<Tipo> {
    return this.tiposService.createTipo(newTipo);
  }

  @Get()
  getAllTipos(): Promise<Tipo[]> {
    return this.tiposService.getAllTipos();
  }

  @Post('/update-tipo')
  updateTipo(@Body() currentUser: UpdateTipoDto) {
    return this.tiposService.updateTipo(currentUser);
  }

  @Post('/delete-tipo')
  deleteUser(@Body('id') id: number) {
    return this.tiposService.deleteTipo(id);
  }
}
