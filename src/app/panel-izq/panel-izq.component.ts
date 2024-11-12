import { Component, OnInit } from '@angular/core';
import { RestUsuariosService } from '../services/rest-usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-izq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-izq.component.html',
  styleUrls: ['./panel-izq.component.css']
})
export class PanelIzqComponent implements OnInit {
  mensajes: any[] = [];  // Aquí se guardarán los mensajes
  message: string = "";

  constructor(private restUsuariosService: RestUsuariosService) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage) {
      const usuarioId = localStorage.getItem('id_usuario');
      if (usuarioId) {
        this.restUsuariosService.getUltimosMensajes(parseInt(usuarioId, 10)).subscribe(
          response => {
            if (response.success) {
              if (Array.isArray(response.data)) {
                this.mensajes = response.data; // Asignar los mensajes obtenidos
              } else {
                console.error('La respuesta no es un arreglo:', response.data);
                this.message = 'No se encontraron mensajes';
              }
            } else {
              this.message = 'No se pudieron obtener los mensajes';
            }
          },
          error => {
            console.error('Error de servidor:', error);
            this.message = 'Hubo un error al intentar obtener los mensajes.';
          }
        );
      } else {
        this.message = 'Por favor, inicie sesión nuevamente.';
      }
    } else {
      console.warn('localStorage no está disponible.');
      this.message = 'No se pudo acceder a la información de la sesión.';
    }
  }
}
