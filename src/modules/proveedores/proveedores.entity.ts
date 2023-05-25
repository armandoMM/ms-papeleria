import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
  @ManyToOne(() => Estado)
  estado_id: Estado;
}
