import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto';
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

  getAllUsuarios() {
    return this.userRepository.find();
  }

  async getUser(nombre: string, pw: string) {
    const usuario = await this.userRepository.find({
      where: {
        nombre,
        pw,
      },
    });
    console.log(usuario);
    return usuario[0];
  }
}
