import { Controller, Get } from '@nestjs/common';
import { TiposService } from './tipos.service';
import { Tipo } from './tipos.entity';

@Controller('tipos')
export class TiposController {
  constructor(private readonly tiposService: TiposService) {}
  @Get()
  getAllTipos(): Promise<Tipo[]> {
    return this.tiposService.getAllTipos();
  }
}
