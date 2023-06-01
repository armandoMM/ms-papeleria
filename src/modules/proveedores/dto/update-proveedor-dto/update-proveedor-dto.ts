import { Estado } from 'src/modules/estados/estados.entity';

export class UpdateProveedorDto {
  id: number;
  nombre: string;
  telefono?: string;
  correo?: string;
  calle: string;
  numero: string;
  colonia: string;
  municipio: string;
  estado_id: Estado;
}
