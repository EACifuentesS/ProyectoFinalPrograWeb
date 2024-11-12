import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado-log',
  standalone: true,
  templateUrl: './encabezado-log.component.html',
  styleUrls: ['./encabezado-log.component.css']
})
export class EncabezadoLogComponent {
  nombreUsuario: string | null = '';

  constructor() {
    this.nombreUsuario = localStorage.getItem('nombre_usuario');
  }
}
