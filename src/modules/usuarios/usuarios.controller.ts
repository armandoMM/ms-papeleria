import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUsuarioDto, UpdateUsuarioDto } from './dto';
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
  getUser(@Query('nombre') nombre: string, @Query('pw') pw: string) {
    return this.usuarioService.getUser(nombre, pw);
  }

  @Post('/delete-user')
  deleteUser(@Body('id') id: number) {
    return this.usuarioService.deleteUser(id);
  }

  @Get('/all')
  getAllUsers(): Promise<Usuario[]> {
    return this.usuarioService.getAllUsuarios();
  }

  @Post('/update-user')
  updateUser(@Body() currentUser: UpdateUsuarioDto) {
    return this.usuarioService.updateUser(currentUser);
  }
}
