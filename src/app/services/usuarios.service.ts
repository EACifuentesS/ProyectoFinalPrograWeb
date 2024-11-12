import { Injectable } from '@angular/core';
import { Usuario } from '../data/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuario : Usuario[];

  constructor() { 
    this.usuario=[];
  }

  getUsuario(){
    return this.usuario;
  }

  saveNewUsuario(newUsuario : Usuario){
    this.usuario.push(newUsuario);
  }
}
