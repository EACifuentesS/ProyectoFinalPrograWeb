import { Component, OnInit } from '@angular/core';
import { RestUsuariosService } from '../services/rest-usuarios.service';  // Asegúrate de importar el servicio correctamente
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-derecho-log',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './panel-derecho-log.component.html',
  styleUrls: ['./panel-derecho-log.component.css'],
  
})
export class PanelDerechoLogComponent implements OnInit {
  seguidores: any[] = [];  
  usuariosEncontrados: any[] = [];  
  busqueda: string = ''; 
  mensajesEnviados: number = 0; 
  usuariosActivos: number = 0;
  message: string = '';

  constructor(
    private restUsuariosService: RestUsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerSeguidores();
    this.obtenerEstadisticas();
  }

  // Obtener las personas que sigue el usuario
  obtenerSeguidores(): void {
    const usuarioId = localStorage.getItem('id_usuario');
    if (usuarioId) {
      this.restUsuariosService.getSeguidores(parseInt(usuarioId, 10)).subscribe(
        (response) => {
          if (response.success) {
            this.seguidores = response.data;  // Suponiendo que el API devuelve los seguidores
          }
        },
        (error) => {
          console.error('Error al obtener los seguidores:', error);
        }
      );
    }
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
  // Buscar usuarios basados en el valor de busqueda
  buscarUsuarios(): void {
    if (this.busqueda.length > 0) {
      this.restUsuariosService.buscarUsuarios(this.busqueda).subscribe(
        (response) => {
          if (response.success) {
            this.usuariosEncontrados = response.data;
          }
        },
        (error) => {
          console.error('Error al buscar usuarios:', error);
        }
      );
    } else {
      this.usuariosEncontrados = [];  
    }
  }

  // Función para cerrar sesión
  cerrarSesion(): void {
    localStorage.removeItem('id_usuario');
    this.router.navigate(['']);  
  }
}
