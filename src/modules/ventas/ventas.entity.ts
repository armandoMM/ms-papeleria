import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { Sucursal } from '../sucursales/sucursales.entity';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'date', nullable: true })
  fecha_registro: string;
  @Column()
  costo_total: number;
  @Column()
  dinero_recibido: number;
  @Column()
  cambio: number;
  @Column()
  moneda: string;
  @Column()
  caja: number;
  @Column()
  estatus: string;
  @OneToOne(() => Sucursal)
  @JoinColumn()
  sucursal_id: Sucursal;
  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario_id: Usuario;
}
