import { Routes } from '@angular/router';
import { PaginaInicioNsComponent } from './pagina-inicio-rg/pagina-inicio-ns.component';
import { PaginaInicioLgComponent } from './pagina-inicio-lg/pagina-inicio-lg.component';
import { PaginaInicioLogeadoComponent } from './pagina-inicio-logeado/pagina-inicio-logeado.component';
export const routes: Routes = [
    
    {
        path:"", 
        component:PaginaInicioLgComponent
    },

    {
        path:"register",
        component:PaginaInicioNsComponent
    },

   {
        path:"logeado",
        component: PaginaInicioLogeadoComponent
    },
];
