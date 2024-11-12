import { Component } from '@angular/core';
import { Usuario } from '../data/usuario';
import { RestUsuariosService } from '../services/rest-usuarios.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contenido-registro',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contenido-registro.component.html',
  styleUrls: ['./contenido-registro.component.css'] // Corrección aquí: styleUrls en plural
})
export class ContenidoRegistroComponent {
  usuario: Usuario = new Usuario();
  message: string = "";
  isPasswordValidFlag: boolean = false;

  constructor(
    private restUsuariosService: RestUsuariosService,
    private router: Router // Inyección correcta de Router
  ) {}

  saveNewUser() {
    this.restUsuariosService.saveNewUser(this.usuario).subscribe(
      (response) => {
        if (response.success) {
          this.message = 'Usuario creado con éxito';
          // Limpiar los campos del formulario
          this.usuario = new Usuario(); 
        } else {
          this.message = 'Error al crear el usuario';
        }
      },
      (error) => {
        console.error('Error de servidor:', error);
        this.message = 'Hubo un error al intentar crear el mensaje.';
      }
    );
  }

  validatePassword() {
    this.isPasswordValidFlag = this.isPasswordValid(this.usuario.contrasena);
  }

  isPasswordValid(password: String): boolean { // Cambiado de 'String' a 'string'
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password.toString());
  }
  

  navigateUsuarioLogin() {
    this.router.navigate([""]); // Redirección al inicio de sesión
  }
}
