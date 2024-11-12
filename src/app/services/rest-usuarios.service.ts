import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestResponse } from '../data/rest-response';
import { Usuario } from '../data/usuario';
import { Mensajes } from '../data/mensajes';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class RestUsuariosService {

  constructor(private http:HttpClient) { }
  
  saveNewUser(body:Usuario){
    return this.http.post<RestResponse>('/usuarios/create', body);
  }

  logUsuario(body:Usuario){
    return this.http.post<RestResponse>('/usuarios/findUser', body);
  }

  crearMensaje(mensaje: Mensajes) {
    return this.http.post<RestResponse>('usuarios/create/mensajes', mensaje);
  }

  getUltimosMensajes(id_usuario: number) {
    return this.http.get<RestResponse>(`/usuarios/mensajes/${id_usuario}`);
  }

  getEstadisticas() {
    return this.http.get<{ success: boolean, data: { usuarios: number, mensajes: number } }>('/usuarios/estadisticas');
  }

  getMisMensajes(id_usuario: number): Observable<RestResponse> {
    return this.http.get<RestResponse>(`usuarios/misMensajes/${id_usuario}`);
  }
  
  getMensajesSeguidos(id_usuario: number): Observable<RestResponse> {
    return this.http.get<RestResponse>(`usuarios/mensajesSeguidos/${id_usuario}`)
  }
  
  getSeguidores(id_usuario: number): Observable<any> {
    return this.http.get<any>(`/usuarios/seguidores/${id_usuario}`);
  }
  
  buscarUsuarios(query: string): Observable<any> {
    return this.http.get<any>(`/usuarios/buscar?query=${query}`);
  }

}
