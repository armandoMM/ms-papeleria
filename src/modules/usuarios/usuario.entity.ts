import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Estado } from '../estados/estados.entity';
import { Tipo } from '../tipos/tipos.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nombre: string;
  @Column()
  pw: string;
  @Column()
  ape_paterno: string;
  @Column()
  ape_materno: string;
  @Column({ type: 'date', nullable: true })
  fecha_nac: string;
  @Column()
  telefono: string;
  @Column()
  calle: string;
  @Column()
  numero: string;
  @Column()
  colonia: string;
  @Column()
  municipio: string;
  @OneToOne(() => Estado)
  @JoinColumn()
  estado_id: Estado;
  @OneToOne(() => Tipo)
  @JoinColumn()
  tipo_id: Tipo;
}
