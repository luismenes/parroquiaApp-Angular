import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// libreria de angular materia
import { MaterialModule } from './material.module';


// Firebase

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DespachoComponent } from './pages/despacho/despacho.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AsideComponent } from './shared/aside/aside.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { InformacionComponent } from './pages/informacion/informacion.component';


import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './shared/login/login.component';
import { RegistrosComponent } from './shared/registros/registros.component';
import { HomeAdmComponent } from './administrador/home-adm/home-adm.component';
import { PartidasAdmComponent } from './administrador/partidas-adm/partidas-adm.component';
import { BautismosComponent } from './administrador/bautismos/bautismos.component';
import { ConfirmacionesComponent } from './administrador/confirmaciones/confirmaciones.component';
import { MatrimoniosComponent } from './administrador/matrimonios/matrimonios.component';
import { DefuncionesComponent } from './administrador/defunciones/defunciones.component';
import { BautismoComponent } from './administrador/bautismo/bautismo.component';
import { TablaBautismosIsComponent } from './administrador/tablas/tabla-bautismos-is/tabla-bautismos-is.component';
import { ConfirmacionComponent } from './administrador/confirmacion/confirmacion.component';
import { TablasConfirmacionComponent } from './administrador/tablas/tablas-confirmacion/tablas-confirmacion.component';
import { DefuncionComponent } from './administrador/defuncion/defuncion.component';
import { TablaDefuncionesComponent } from './administrador/tablas/tabla-defunciones/tabla-defunciones.component';
import { EditorDatosComponent } from './administrador/editor-datos/editor-datos.component';
import { EditCabeceraComponent } from './administrador/edit-cabecera/edit-cabecera.component';
import { TablaSacerdotesComponent } from './administrador/tablas/tabla-sacerdotes/tabla-sacerdotes.component';
import { environment } from '../environments/environment';
import { SacerdotesComponent } from './administrador/subirArchivos/sacerdotes/sacerdotes.component';
import { NuevoSacerdoteComponent } from './subirArchivos/nuevo-sacerdote/nuevo-sacerdote.component';
import { EditarSacerdoteComponent } from './su/editar-sacerdote/editar-sacerdote.component';
import { PapaComponent } from './administrador/archivopapa/papa/papa.component';
import { TablaPapaComponent } from './administrador/archivopapa/tabla-papa/tabla-papa.component';
import { NuevoPapaComponent } from './administrador/archivopapa/nuevo-papa/nuevo-papa.component';
import { EditarPapaComponent } from './administrador/archivopapa/editar-papa/editar-papa.component';
import { ObispoComponent } from './administrador/archivoObispo/obispo/obispo.component';
import { TablaObispoComponent } from './administrador/archivoObispo/tabla-obispo/tabla-obispo.component';
import { EditarObispoComponent } from './administrador/archivoObispo/editar-obispo/editar-obispo.component';
import { CabeceraComponent } from './administrador/cabecera/cabecera.component';
import { TablaInfoBautismoComponent } from './administrador/infoGeneralMenu/bautismo/tabla-info-bautismo/tabla-info-bautismo.component';
import { NuevoInfoBautismoComponent } from './administrador/infoGeneralMenu/bautismo/nuevo-info-bautismo/nuevo-info-bautismo.component';
import { EditarInfoBautismoComponent } from './administrador/infoGeneralMenu/bautismo/editar-info-bautismo/editar-info-bautismo.component';
import { InfoBautismoComponent } from './administrador/infoGeneralMenu/bautismo/info-bautismo/info-bautismo.component';
import { NuevaInfoConfirmacionComponent } from './administrador/infoGeneralMenu/confirmacion/nueva-info-confirmacion/nueva-info-confirmacion.component';
import { EditarInfoConfirmacionComponent } from './administrador/infoGeneralMenu/confirmacion/editar-info-confirmacion/editar-info-confirmacion.component';
import { InfoConfirmacionComponent } from './administrador/infoGeneralMenu/confirmacion/info-confirmacion/info-confirmacion.component';
import { InfoComunionComponent } from './administrador/infoGeneralMenu/comunion/info-comunion/info-comunion.component';
import { NuevaInfoComunionComponent } from './administrador/infoGeneralMenu/comunion/nueva-info-comunion/nueva-info-comunion.component';
import { EditarInfoComunionComponent } from './administrador/infoGeneralMenu/comunion/editar-info-comunion/editar-info-comunion.component';
import { InfoMatrimonioComponent } from './administrador/infoGeneralMenu/matrimonio/info-matrimonio/info-matrimonio.component';
import { NuevainfoMatrimonioComponent } from './administrador/infoGeneralMenu/matrimonio/nuevainfo-matrimonio/nuevainfo-matrimonio.component';
import { EditarinfoMatrimonioComponent } from './administrador/infoGeneralMenu/matrimonio/editarinfo-matrimonio/editarinfo-matrimonio.component';
import { EditarinfoSolteriaComponent } from './administrador/infoGeneralMenu/solteria/editarinfo-solteria/editarinfo-solteria.component';
import { NuevainfoSolteriaComponent } from './administrador/infoGeneralMenu/solteria/nuevainfo-solteria/nuevainfo-solteria.component';
import { InfoSolteriaComponent } from './administrador/infoGeneralMenu/solteria/info-solteria/info-solteria.component';
import { TablaInfoComunionComponent } from './administrador/infoGeneralMenu/comunion/tabla-info-comunion/tabla-info-comunion.component';
import { TablaInfoConfirmacionComponent } from './administrador/infoGeneralMenu/confirmacion/tabla-info-confirmacion/tabla-info-confirmacion.component';
import { TablaInfoMatrimonioComponent } from './administrador/infoGeneralMenu/matrimonio/tabla-info-matrimonio/tabla-info-matrimonio.component';
import { TablaInfoSolteriaComponent } from './administrador/infoGeneralMenu/solteria/tabla-info-solteria/tabla-info-solteria.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DespachoComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    GaleriaComponent,
    GruposComponent,
    InformacionComponent,
    LoginComponent,
    RegistrosComponent,
    HomeAdmComponent,
    PartidasAdmComponent,
    BautismosComponent,
    ConfirmacionesComponent,
    MatrimoniosComponent,
    DefuncionesComponent,
    BautismoComponent,
    TablaBautismosIsComponent,
    ConfirmacionComponent,
    TablasConfirmacionComponent,
    DefuncionComponent,
    TablaDefuncionesComponent,
    EditorDatosComponent,
    EditCabeceraComponent,
    TablaSacerdotesComponent,
    SacerdotesComponent,
    NuevoSacerdoteComponent,
    EditarSacerdoteComponent,
    PapaComponent,
    TablaPapaComponent,
    NuevoPapaComponent,
    EditarPapaComponent,
    ObispoComponent,
    TablaObispoComponent,
    EditarObispoComponent,
    CabeceraComponent,
    TablaInfoBautismoComponent,
    NuevoInfoBautismoComponent,
    EditarInfoBautismoComponent,
    InfoBautismoComponent,
    NuevaInfoConfirmacionComponent,
    EditarInfoConfirmacionComponent,
    InfoConfirmacionComponent,
    InfoComunionComponent,
    NuevaInfoComunionComponent,
    EditarInfoComunionComponent,
    InfoMatrimonioComponent,
    NuevainfoMatrimonioComponent,
    EditarinfoMatrimonioComponent,
    EditarinfoSolteriaComponent,
    NuevainfoSolteriaComponent,
    InfoSolteriaComponent,
    TablaInfoComunionComponent,
    TablaInfoConfirmacionComponent,
    TablaInfoMatrimonioComponent,
    TablaInfoSolteriaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot( APP_ROUTES, { useHash: true}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  entryComponents: [
    SacerdotesComponent,
    ObispoComponent,
    PapaComponent,
    CabeceraComponent,
    InfoBautismoComponent,
    InfoComunionComponent,
    InfoConfirmacionComponent,
    InfoMatrimonioComponent,
    InfoSolteriaComponent
  ],
  providers: [
    {provide: StorageBucket, useValue: 'gs://loginparromomil.appspot.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
