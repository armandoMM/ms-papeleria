import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nombre: string;
  @Column()
  descripcion: string;
  @Column()
  activa: string;
  //   @Column({ type: 'date', nullable: true })
  //   fecha_registro: string;
  //   @Column()
  //   hora_registro: string;
  //   @Column({ type: 'date', nullable: true })
  //   fecha_edicion: string;
  //   @Column()
  //   hora_edicion: string;
  @Column()
  palabraClave: string;
}
