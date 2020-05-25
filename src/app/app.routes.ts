import { Routes} from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DespachoComponent } from './pages/despacho/despacho.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistrosComponent } from './shared/registros/registros.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeAdmComponent } from './administrador/home-adm/home-adm.component';
import { PartidasAdmComponent } from './administrador/partidas-adm/partidas-adm.component';
import { PARTIDAS_ROUTES } from './administrador/partidas.routes';
import { EditorDatosComponent } from './administrador/editor-datos/editor-datos.component';
import { EditCabeceraComponent } from './administrador/edit-cabecera/edit-cabecera.component';
import { TablaSacerdotesComponent } from './administrador/tablas/tabla-sacerdotes/tabla-sacerdotes.component';
import { SacerdotesComponent } from './administrador/subirArchivos/sacerdotes/sacerdotes.component';
import { TablaObispoComponent } from './administrador/archivoObispo/tabla-obispo/tabla-obispo.component';
import { TablaPapaComponent } from './administrador/archivopapa/tabla-papa/tabla-papa.component';
import { TablaInfoBautismoComponent } from './administrador/infoGeneralMenu/bautismo/tabla-info-bautismo/tabla-info-bautismo.component';
import { TablaInfoComunionComponent } from './administrador/infoGeneralMenu/comunion/tabla-info-comunion/tabla-info-comunion.component';
import { TablaInfoConfirmacionComponent } from './administrador/infoGeneralMenu/confirmacion/tabla-info-confirmacion/tabla-info-confirmacion.component';
import { TablaInfoMatrimonioComponent } from './administrador/infoGeneralMenu/matrimonio/tabla-info-matrimonio/tabla-info-matrimonio.component';
import { TablaInfoSolteriaComponent } from './administrador/infoGeneralMenu/solteria/tabla-info-solteria/tabla-info-solteria.component';




export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'servicios', component: DespachoComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'grupos', component: GruposComponent },
    { path: 'contactenos', component: InformacionComponent },
    { path: 'cabecera', component: EditCabeceraComponent, canActivate: [ AuthGuard]},
    { path: 'editarcabecera/:id', component: EditorDatosComponent, canActivate: [ AuthGuard]},
    { path: 'homeadmin', component: HomeAdmComponent, canActivate: [ AuthGuard]  },
    { path: 'partidasadmin',
     component: PartidasAdmComponent,
     children: PARTIDAS_ROUTES,
     canActivate: [ AuthGuard] },
    { path: 'sacerdotes',
    component: TablaSacerdotesComponent, 
    children: [

        { path: 'obispo', component: TablaObispoComponent},
        { path: 'papa', component: TablaPapaComponent}

    ],
    canActivate: [ AuthGuard]},

    { path: 'login', component: LoginComponent },
    { path: 'informacion', component: TablaInfoBautismoComponent,
    children: [

        { path: 'comunion', component: TablaInfoComunionComponent},
        { path: 'confirmacion', component: TablaInfoConfirmacionComponent},
        { path: 'matrimonio', component: TablaInfoMatrimonioComponent},
        { path: 'solteria', component: TablaInfoSolteriaComponent}
    ],
    canActivate: [ AuthGuard] },
    { path: 'registro', component: RegistrosComponent, canActivate: [ AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

