import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Venta } from '../ventas/ventas.entity';
import { Producto } from '../productos/productos.entity';

@Entity('productos_venta')
export class ProductosVenta {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  cantidad: number;
  @ManyToOne(() => Venta)
  venta_id: Venta;
  @ManyToOne(() => Producto)
  producto_id: Producto;
}
