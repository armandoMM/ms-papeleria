import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { UsuariosController } from './usuarios/usuarios.controller';

@Module({
  imports: [UsuariosModule],
  controllers: [AppController, UsuariosController],
  providers: [AppService],
})
export class AppModule {}
