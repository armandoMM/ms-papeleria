import { Estado } from 'src/modules/estados/estados.entity';
import { Tipo } from 'src/modules/tipos/tipos.entity';

export class UpdateUsuarioDto {
  id: number;
  nombre: string;
  pw?: string;
  ape_paterno: string;
  ape_materno: string;
  fecha_nac?: string;
  telefono?: string;
  calle?: string;
  numero?: string;
  colonia?: string;
  municipio?: string;
  estado_id: Estado;
  tipo_id: Tipo;
}
