import { Component } from '@angular/core';
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { PanelIzqComponent } from "../panel-izq/panel-izq.component";
import { PanelDerComponent } from "../panel-der/panel-der.component";
import { PieDePaginaComponent } from "../pie-de-pagina/pie-de-pagina.component";
import { PaginaContenidoLogeadoComponent } from '../pagina-contenido-logeado/pagina-contenido-logeado.component';
import { ContenidoMensajesComponent } from "../contenido-mensajes/contenido-mensajes.component";
import { ContenidoLoginComponent } from "../contenido-login/contenido-login.component";
import { EncabezadoLogComponent } from "../encabezado-log/encabezado-log.component";
import { PanelDerechoLogComponent } from "../panel-derecho-log/panel-derecho-log.component";



@Component({
  selector: 'app-pagina-inicio-logeado',
  standalone: true,
  imports: [PanelIzqComponent, PieDePaginaComponent, ContenidoMensajesComponent, EncabezadoLogComponent, PanelDerechoLogComponent],
  templateUrl: './pagina-inicio-logeado.component.html',
  styleUrl: './pagina-inicio-logeado.component.css'
})
export class PaginaInicioLogeadoComponent {

}
