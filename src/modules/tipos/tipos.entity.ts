import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipos')
export class Tipo {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  tipo: string;
  @Column()
  descripcion: string;
  // @Column()
  // acronimo: string;
  // @Column()
  // permisoRoot: string;
  @Column()
  activo: string;
  // @Column({ type: 'date', nullable: true })
  // fecha_edicion: string;
  // @Column()
  // hora_edicion: string;
  @Column()
  tiempoCompleto: string;
}
