import { Module } from '@nestjs/common';
import { MarcasService } from './marcas.service';

@Module({
  providers: [MarcasService]
})
export class MarcasModule {}
