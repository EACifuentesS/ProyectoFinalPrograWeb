import { Usuario } from './usuario';

export interface RestResponse {
  success: boolean;
  message: string;
  data: {
    id_usuario: number;
    usuario: string;
    nombre_completo: string;
  };
}