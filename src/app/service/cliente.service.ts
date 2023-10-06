import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteActual: Cliente | null = null;

  setCliente(cliente: Cliente) {
    this.clienteActual = cliente;
  }

  getCliente(): Cliente | null {
    return this.clienteActual;
  }
}
