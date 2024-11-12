import { Component } from '@angular/core';
import { PanelIzqComponent } from "../panel-izq/panel-izq.component";
import { ContenidoLoginComponent } from "../contenido-login/contenido-login.component";
import { PieDePaginaComponent } from "../pie-de-pagina/pie-de-pagina.component";
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { PanelDerComponent } from "../panel-der/panel-der.component";  
 
@Component({
  selector: 'app-pagina-inicio-lg',
  standalone: true,
  imports: [PanelIzqComponent, ContenidoLoginComponent, PieDePaginaComponent,  EncabezadoComponent, PanelDerComponent],
  templateUrl: './pagina-inicio-lg.component.html',
  styleUrl: './pagina-inicio-lg.component.css'
})
export class PaginaInicioLgComponent {

}
