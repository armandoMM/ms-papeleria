import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Estado } from '../estados/estados.entity';

@Entity('proveedores')
export class Proveedor {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nombre: string;
  @Column()
  telefono: string;
  @Column()
  correo: string;
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
}
