import { Sucursal } from 'src/modules/sucursales/sucursales.entity';
import { Usuario } from 'src/modules/usuarios/usuario.entity';

export class UpdateVentaDto {
  id: number;
  fecha_registro: string;
  costo_total: number;
  dinero_recibido: number;
  cambio: number;
  moneda: string;
  caja: number;
  estatus: string;
  sucursal_id: Sucursal;
  usuario_id: Usuario;
}
