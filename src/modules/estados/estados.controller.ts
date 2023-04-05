import { Controller, Get } from '@nestjs/common';
import { Estado } from './estados.entity';
import { EstadosService } from './estados.service';

@Controller('estados')
export class EstadosController {
  constructor(private readonly estadosService: EstadosService) {}
  @Get()
  getAllEstados(): Promise<Estado[]> {
    return this.estadosService.getAllEstados();
  }
}
