import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
  @ManyToOne(() => Estado, (estado) => estado.id)
  estado_id: Estado;
  @ManyToOne(() => Tipo, (tipo) => tipo.id)
  tipo_id: Tipo;
}
