import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit{
  cliente: Cliente | null = null;

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cliente = this.clienteService.getCliente();
  }
  onVolver() {
    this.router.navigate(['/ingreso']);
  }
}
