import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto, UpdateUsuarioDto } from './dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private userRepository: Repository<Usuario>,
  ) {}

  async createUser(Usuario: CreateUsuarioDto) {
    const newUsuario = await this.userRepository.create(Usuario);
    return this.userRepository.save(newUsuario);
  }

  async getAllUsuarios() {
    return await this.userRepository.find({
      relations: {
        tipo_id: true,
        estado_id: true,
      },
    });
  }

  async getUser(nombre: string, pw: string) {
    const usuario = await this.userRepository.find({
      where: {
        nombre,
        pw,
      },
    });
    return usuario[0];
  }

  async updateUser(usuario: UpdateUsuarioDto) {
    const usr = await this.userRepository.find({
      where: {
        nombre: usuario.nombre,
        ape_paterno: usuario.ape_paterno,
        ape_materno: usuario.ape_materno,
      },
    });
    if (!usr) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return this.userRepository.update(usr[0].id, usuario);
  }

  async deleteUser(id: number) {
    return await this.userRepository.delete({ id });
  }
}
