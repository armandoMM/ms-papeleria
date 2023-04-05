import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUsuarioDto } from './dto';
import { Usuario } from './usuario.entity';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioService: UsuariosService) {}

  @Post()
  createUsuarios(@Body() newUser: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioService.createUser(newUser);
  }

  @Get()
  getUser(
    @Query('nombre') nombre: string,
    @Query('pw') pw: string,
  ): Promise<Usuario> {
    return this.usuarioService.getUser(nombre, pw);
  }

  @Get()
  getAllUsers(): Promise<Usuario[]> {
    return this.usuarioService.getAllUsuarios();
  }
}
