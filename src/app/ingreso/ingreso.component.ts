import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente, ClienteResponse } from '../models/cliente.model';
import { ClienteService } from '../service/cliente.service';



@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent {
  tipo: string = '';
  numero: string = '';
  pattern: string = "[0-9]{8,11}";

  constructor(private router: Router,  private http: HttpClient, private clienteService: ClienteService) {}
  onBuscar() {
    this.http.get<ClienteResponse>('/assets/data/clientes.json').subscribe((data: {clientes: Cliente[]}) => { 
      const cliente = this.findCliente(data.clientes);
      if (cliente) {
        this.clienteService.setCliente(cliente); // Guardar el cliente en el servicio

        this.router.navigate(['/resumen']);
      } else {
        alert('Cliente no encontrado');
      }
    }, error => {
      console.error('Datos no definidos o estructura incorrecta.', error);
    });  
  }

  private findCliente(clientes: Cliente[]): Cliente | undefined {
    return clientes.find(c => c.tipo === this.tipo && c.numero === this.numero);
  }

  changeValidation() {
    if (this.tipo === 'cedula') {
      this.pattern = "[0-9]{8,11}";
    } else if (this.tipo === 'pasaporte') {
      this.pattern = "[A-Za-z0-9]+";
    }
  }
}
