import { Estado } from 'src/modules/estados/estados.entity';

export class CreateSucursalDto {
  nombre: string;
  telefono: string;
  correo: string;
  numEmpleados: number;
  horario_ini: string;
  horario_fin: string;
  calle: string;
  numero: string;
  colonia: string;
  municipio: string;
  estado_id: Estado;
}
