import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tipo {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  tipo: string;
  @Column()
  descripcion: string;
  @Column()
  acronimo: string;
  @Column()
  permisoRoot: string;
  @Column()
  activo: string;
  @Column()
  fecha_edicion: Date;
  @Column()
  hora_edicion: string;
  @Column()
  tiempoCompleto: string;
}
