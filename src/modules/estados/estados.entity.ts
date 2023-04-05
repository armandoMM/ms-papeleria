import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estados')
export class Estado {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nombre: string;
  @Column()
  descripcion: string;
}
