import { Component } from '@angular/core';
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { PanelIzqComponent } from "../panel-izq/panel-izq.component";
import { ContenidoRegistroComponent } from "../contenido-registro/contenido-registro.component";
import { PanelDerComponent } from "../panel-der/panel-der.component";
import { PieDePaginaComponent } from "../pie-de-pagina/pie-de-pagina.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-pagina-inicio-ns',
  standalone: true,
  imports: [EncabezadoComponent, PanelIzqComponent, PanelDerComponent, PieDePaginaComponent, ContenidoRegistroComponent],
  templateUrl: './pagina-inicio-ns.component.html',
  styleUrl: './pagina-inicio-ns.component.css'
})
export class PaginaInicioNsComponent {

}
