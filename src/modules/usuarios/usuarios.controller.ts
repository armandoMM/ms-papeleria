import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUsuarioDto, UpdateUsuarioDto } from './dto';
import { Usuario } from './usuario.entity';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuarioService: UsuariosService) {}

  @Post()
  createUsuarios(@Body() newUser: CreateUsuarioDto): Promise<Usuario> {
    try {
      return this.usuarioService.createUser(newUser);
    } catch (error) {
      throw new HttpException(
        'Error: No se pudo guardar usuario',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async getUser(@Query('nombre') nombre: string, @Query('pw') pw: string) {
    const usr = await this.usuarioService.getUser(nombre, pw);
    if (!usr) {
      throw new HttpException(
        'Error al iniciar sesión',
        HttpStatus.BAD_REQUEST,
      );
    }
    return usr;
  }

  @Post('/delete-user')
  deleteUser(@Body('id') id: number) {
    try {
      return this.usuarioService.deleteUser(id);
    } catch (error) {
      throw new HttpException(
        'Error al borrar usuario',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('/all')
  getAllUsers(): Promise<Usuario[]> {
    return this.usuarioService.getAllUsuarios();
  }

  @Post('/update-user')
  updateUser(@Body() currentUser: UpdateUsuarioDto) {
    try {
      return this.usuarioService.updateUser(currentUser);
    } catch (error) {
      throw new HttpException(
        'Error al actualizar Usuario',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
