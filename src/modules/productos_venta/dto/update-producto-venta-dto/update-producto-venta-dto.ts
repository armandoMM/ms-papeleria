import { Producto } from 'src/modules/productos/productos.entity';
import { Venta } from 'src/modules/ventas/ventas.entity';

export class UpdateProductoVentaDto {
  id: number;
  cantidad: number;
  venta_id: Venta;
  producto_id: Producto;
}
