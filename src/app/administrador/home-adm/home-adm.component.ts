import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EditorDatosService } from '../../services/editor-datos.service';
import { SacerdotesService } from '../../services/sacerdotes.service';
import { Observable } from 'rxjs';
import { PostI } from '../../models/post.interface';
import { ObispoI } from '../archivoObispo/models/obispo.interface';
import { ObispoService } from '../archivoObispo/obispo.service';
import { PapaI } from '../archivopapa/models/papa.interface';
import { PapaService } from '../archivopapa/papa.service';
import { PosCabeceraModelI } from '../../models/editorDatos.interface';
import { InfoBautismoI } from '../infoGeneralMenu/bautismo/models/bautismo.interface';
import { InfoBautismoService } from '../infoGeneralMenu/bautismo/info-bautismo.service';
import { InfoComunionI } from '../infoGeneralMenu/comunion/models/comunion.interface';
import { InfoComunionService } from '../infoGeneralMenu/comunion/info-comunion.service';
import { InfoConfirmacionI } from '../infoGeneralMenu/confirmacion/models/confirmacion.interface';
import { InfoConfirmacionService } from '../infoGeneralMenu/confirmacion/info-confirmacion.service';
import { InfoMatrimonioI } from '../infoGeneralMenu/matrimonio/models/matrimonio.interface';
import { InfoMatrimonioService } from '../infoGeneralMenu/matrimonio/info-matrimonio.service';
import { InfoSolteriaI } from '../infoGeneralMenu/solteria/models/solteria.interface';
import { InfoSolteriaService } from '../infoGeneralMenu/solteria/info-solteria.service';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.component.html',
  styles: []
})
export class HomeAdmComponent implements OnInit {

  editar = false;
  
  public cabecera$        : Observable<PosCabeceraModelI[]>;
  public sacerdotes$      : Observable<PostI[]>;
  public obispo$          : Observable<ObispoI[]>;
  public papa$            : Observable<PapaI[]>;
  public infoBautismo$    : Observable<InfoBautismoI[]>;
  public infoComunion$    : Observable<InfoComunionI[]>;
  public infoConfirmacion$: Observable<InfoConfirmacionI[]>;
  public infoMatrimonio$  : Observable<InfoMatrimonioI[]>;
  public infoSolteria$    : Observable<InfoSolteriaI[]>;

  constructor(private auth: AuthService,
              private editorDatosService: EditorDatosService,
              private sacerdotesService: SacerdotesService,
              private obispoService: ObispoService,
              private papaService: PapaService,
              private infoBautismoService: InfoBautismoService,
              private infoComunionService: InfoComunionService,
              private infoConfirmacionService: InfoConfirmacionService,
              private infoMatrimonioService: InfoMatrimonioService,
              private infoSolteriaService: InfoSolteriaService) { 

    this.sesionActiva();
  }

  ngOnInit() {


    // this.sacerdotesService.getAllPosts().subscribe( res => console.log('POST', res));
    this.sacerdotes$       =  this.sacerdotesService.getAllPosts();
    this.obispo$           =  this.obispoService.getAllPosts();
    this.papa$             =  this.papaService.getAllPosts();
    this.cabecera$         =  this.editorDatosService.getAllPosts();
    this.infoBautismo$     =  this.infoBautismoService.getAllPosts();
    this.infoComunion$     =  this.infoComunionService.getAllPosts();
    this.infoConfirmacion$ =  this.infoConfirmacionService.getAllPosts();
    this.infoMatrimonio$   =  this.infoMatrimonioService.getAllPosts();
    this.infoSolteria$     =  this.infoSolteriaService.getAllPosts();

  }


  sesionActiva() {


    if (localStorage.getItem('token')) {

      this.editar = true;


    } else {

      this.editar = false;


    }

  }

}
