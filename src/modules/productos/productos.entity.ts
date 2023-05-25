import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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
  //TODO: PUEDEN CAMBIAR A MANYTOONE
  @OneToOne(() => Categoria)
  @JoinColumn()
  categoria_id: Categoria;
  @ManyToOne(() => Marca, (marca) => marca.id)
  marca_id: Marca;
  @ManyToOne(() => Proveedor, (proveedor) => proveedor.id)
  proveedor_id: Proveedor;
}
