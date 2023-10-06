export interface Cliente {
  tipo: string;
  numero: string;
  nombre: string;
  apellido: string;
  edad: number;
  direccion: string;
}
export interface ClienteResponse {
  clientes: Cliente[];
}
