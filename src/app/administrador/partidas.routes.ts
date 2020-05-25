import { Routes } from '@angular/router';
import { BautismosComponent } from './bautismos/bautismos.component';
import { ConfirmacionesComponent } from './confirmaciones/confirmaciones.component';
import { MatrimoniosComponent } from './matrimonios/matrimonios.component';
import { DefuncionesComponent } from './defunciones/defunciones.component';
import { BautismoComponent } from './bautismo/bautismo.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { DefuncionComponent } from './defuncion/defuncion.component';


export const PARTIDAS_ROUTES: Routes = [

    { path: 'bautismos', component: BautismosComponent},
    { path: 'bautismo/:id', component: BautismoComponent},
    { path: 'confirmaciones', component: ConfirmacionesComponent},
    { path: 'confirmaciones/:id', component: ConfirmacionComponent},
    { path: 'matrimonios', component: MatrimoniosComponent},
    { path: 'defunciones/:id', component: DefuncionesComponent},
    { path: 'defuncion', component: DefuncionComponent},
    { path: '', pathMatch: 'full', redirectTo: 'homeadmin'}
];
