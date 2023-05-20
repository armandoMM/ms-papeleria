import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('marcas')
export class Marca {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nombre: string;
  @Column()
  siglas: string;
  @Column()
  importacion: string;
  @Column()
  slogan: string;
  @Column({ type: 'date', nullable: true })
  fecha_registro: string;
  @Column()
  hora_registro: string;
  @Column()
  fundador: string;
  @Column()
  anioFundacion: string;
}
