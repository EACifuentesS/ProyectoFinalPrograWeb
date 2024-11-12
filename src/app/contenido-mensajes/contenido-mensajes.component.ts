import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mensajes } from '../data/mensajes';
import { RestUsuariosService } from '../services/rest-usuarios.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenido-mensajes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contenido-mensajes.component.html',
  styleUrls: ['./contenido-mensajes.component.css']
})
export class ContenidoMensajesComponent {
  mensaje: Mensajes = { mensajes: '', id_usuario: 0, fechamensaje: '' };
  message: string = "";
  misMensajes: any[] = [];   // Mensajes propios
  mensajesSeguidos: any[] = [];  // Mensajes de los usuarios seguidos

  constructor(
    private restUsuariosService: RestUsuariosService,
    private router: Router
  ) {}

  crearMensaje() {
    this.mensaje.fechamensaje = new Date().toISOString();

    this.restUsuariosService.crearMensaje(this.mensaje).subscribe(
      (response) => {
        if (response.success) {
          this.message = 'Mensaje creado con éxito';
          this.mensaje.mensajes = '';
          this.obtenerMensajes();  // Refresca los mensajes 
        } else {
          this.message = 'Error al crear el mensaje';
        }
      },
      (error) => {
        console.error('Error de servidor:', error);
        this.message = 'Hubo un error al intentar crear el mensaje.';
      }
    );
  }

  ngOnInit(): void {
    const usuarioId = localStorage.getItem('id_usuario');
    if (usuarioId) {
      this.mensaje.id_usuario = parseInt(usuarioId, 10);
      this.obtenerMensajes();  // Llama a la función para obtener los mensajes
      this.obtenerMensajesSeguidos();  // Llama a la función para obtener los mensajes seguidos
    } else {
      console.error('Error: No se encontró el id_usuario en localStorage.');
      this.message = 'Por favor inicia sesión nuevamente.';
    }
  }

  obtenerMensajes(): void {
    this.restUsuariosService.getMisMensajes(this.mensaje.id_usuario).subscribe(
      (response) => {
        if (response.success) {
          this.misMensajes = [response.data]; 
        } else {
          this.message = 'No se pudieron obtener los mensajes.';
        }
      },
      (error) => {
        console.error('Error al obtener mensajes:', error);
        this.message = 'Hubo un error al obtener los mensajes.';
      }
    );
  }

  obtenerMensajesSeguidos(): void {
    this.restUsuariosService.getMensajesSeguidos(this.mensaje.id_usuario).subscribe(
      (response) => {
        if (response.success) {
          this.mensajesSeguidos = [response.data];
        } else {
          this.message = 'No se pudieron obtener los mensajes de los usuarios seguidos.';
        }
      },
      (error) => {
        console.error('Error al obtener mensajes seguidos:', error);
        this.message = 'Hubo un error al obtener los mensajes de los usuarios seguidos.';
      }
    );
  }

  cerrarSesion() {
    localStorage.removeItem('id_usuario');
    this.router.navigate(['']);
  }
}
