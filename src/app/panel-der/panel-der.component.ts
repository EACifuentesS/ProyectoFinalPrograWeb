import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestUsuariosService } from '../services/rest-usuarios.service';

@Component({
  selector: 'app-panel-der',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-der.component.html',
  styleUrls: ['./panel-der.component.css']
})
export class PanelDerComponent implements OnInit {
  usuariosActivos: number = 0;
  mensajesEnviados: number = 0;
  message: string = '';

  constructor(private restUsuariosService: RestUsuariosService) {}

  ngOnInit(): void {
    this.obtenerEstadisticas();
  }

  obtenerEstadisticas(): void {
    this.restUsuariosService.getEstadisticas().subscribe(
      response => {
        if (response.success) {
          this.usuariosActivos = response.data.usuarios;
          this.mensajesEnviados = response.data.mensajes;
        } else {
          this.message = 'No se pudieron obtener las estadísticas';
        }
      },
      error => {
        console.error('Error al obtener estadísticas:', error);
        this.message = 'Hubo un error en el servidor.';
      }
    );
  }
}
