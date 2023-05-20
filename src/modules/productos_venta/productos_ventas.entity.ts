import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Venta } from '../ventas/ventas.entity';
import { Producto } from '../productos/productos.entity';

@Entity('productos_venta')
export class Producto_Venta {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  cantidad: number;
  @OneToOne(() => Venta)
  @JoinColumn()
  venta_id: Venta;
  @OneToOne(() => Producto)
  @JoinColumn()
  usuario_id: Producto;
}
