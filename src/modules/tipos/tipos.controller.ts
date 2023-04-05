import { Controller, Get } from '@nestjs/common';

@Controller('tipos')
export class TiposController {
  @Get()
  getAllTipos() {
    return [];
  }
}
