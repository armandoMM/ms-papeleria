import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Marca } from '../marcas/marcas.entity';
import { Categoria } from '../categorias/categorias.entity';
import { Proveedor } from '../proveedores/proveedores.entity';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  nombre: string;
  @Column()
  existencia: number;
  @Column()
  precio_unitario: number;
  @Column()
  precio_adquirido: number;
  @Column()
  precio_mayoreo: number;
  @Column()
  enPromocion: string;
  @Column()
  porcentajeProm: number;
  @Column()
  ganancia_may: number;
  @Column()
  ganancia_unit: number;
  @OneToOne(() => Categoria)
  @JoinColumn()
  categoria_id: Categoria;
  @OneToOne(() => Marca)
  @JoinColumn()
  marca_id: Marca;
  @OneToOne(() => Proveedor)
  @JoinColumn()
  proveedor_id: Proveedor;
}
