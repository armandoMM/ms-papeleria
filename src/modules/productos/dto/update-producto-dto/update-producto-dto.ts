import { Categoria } from 'src/modules/categorias/categorias.entity';
import { Marca } from 'src/modules/marcas/marcas.entity';
import { Proveedor } from 'src/modules/proveedores/proveedores.entity';

export class UpdateProductoDto {
  id: number;
  nombre: string;
  existencia: number;
  precio_unitario: number;
  precio_adquirido: number;
  precio_mayoreo: number;
  enPromocion: string;
  porcentajeProm: number;
  ganancia_may: number;
  ganancia_unit: number;
  categoria_id: Categoria;
  marca_id: Marca;
  proveedor_id: Proveedor;
}
