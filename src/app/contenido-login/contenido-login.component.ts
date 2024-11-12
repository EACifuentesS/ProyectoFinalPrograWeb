import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../data/usuario';
import { Router } from '@angular/router';
import { RestUsuariosService } from '../services/rest-usuarios.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contenido-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contenido-login.component.html',
  styleUrls: ['./contenido-login.component.css']
})
export class ContenidoLoginComponent {
  usuario: Usuario = new Usuario();
  message: string = "";

  constructor(
    private restUsuariosService: RestUsuariosService,
    private router: Router
  ) {}

  logUsuario() {
    this.restUsuariosService.logUsuario(this.usuario).subscribe(
      (result) => {
        if (result.success) {
          // Guarda el id_usuario y nombre_usuario en localStorage después del inicio de sesión exitoso
          localStorage.setItem('id_usuario', result.data.id_usuario.toString());
          localStorage.setItem('nombre_usuario', result.data.usuario);
          this.message = 'Inicio de sesión exitoso';
  
          // Redirige a la ruta deseada después del inicio de sesión exitoso
          this.router.navigate(['/logeado']);
        } else {
          this.message = result.message || 'Usuario o contraseña incorrectos';
        }
      },
      (error) => {
        console.error('Error de servidor', error);
        this.message = 'Hubo un error al intentar iniciar sesión. Intenta de nuevo.';
      }
    );
  }
  

  navigateUsuarioCreate() {
    this.router.navigate(["/register"]);
  }
}
