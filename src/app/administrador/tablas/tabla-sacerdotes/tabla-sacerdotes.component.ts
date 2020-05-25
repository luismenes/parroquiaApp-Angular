import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { SacerdotesService } from '../../../services/sacerdotes.service';
import { PostI } from '../../../models/post.interface';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { SacerdotesComponent } from '../../subirArchivos/sacerdotes/sacerdotes.component';
import { Observable } from 'rxjs';
import { ObispoI } from '../../archivoObispo/models/obispo.interface';
import { PapaI } from '../../archivopapa/models/papa.interface';
import { ObispoService } from '../../archivoObispo/obispo.service';
import { PapaService } from '../../archivopapa/papa.service';


@Component({
  selector: 'app-tabla-sacerdotes',
  templateUrl: './tabla-sacerdotes.component.html',
  styles: []
})
export class TablaSacerdotesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['namePost', 'inicioPost', 'salidaPost', 'actions'];
  dataSource = new MatTableDataSource();

  public sacerdotes$: Observable<PostI[]>;
  public obispo$: Observable<ObispoI[]>;
  public papa$: Observable<PapaI[]>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {

      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  constructor( private sacerdotesService: SacerdotesService, 
               private obispoService: ObispoService,
               private papaService: PapaService, public dialog: MatDialog) { }
  
  ngOnInit() {

    this.sacerdotes$ =  this.sacerdotesService.getAllPosts();
    this.obispo$     =  this.obispoService.getAllPosts();
    this.papa$       =  this.papaService.getAllPosts();

    this.sacerdotesService.getAllPosts().subscribe( sacerdotes => this.dataSource.data = sacerdotes);
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  deleteSacerd(post: PostI){
    console.log('Borrando Post', post);

    Swal.fire({
      icon: 'question',
      title: '¿Esta Seguro?',
      text: `Esta seguro que quiere eliminar al Pbro. ${post.namePost} `,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then(resp => {

      if (resp.value) {

        this.sacerdotesService.deleteSacerdById(post);

        Swal.fire(
          'Eliminado!',
          `El Presbitero ${post.namePost} fue eliminado con exito.`,
          'success'
        );

      }
    });

  }

  editSacerd(post: PostI){
    
    console.log('Editando Post', post);
    this.openDialog(post);
  }

  newSacert(){

    this.openDialog();

  }

  openDialog(post?: PostI): void {
    const config = {
      data:{
        message: post ? `Editar ${post.namePost}` : 'Nuevo Sacerdote',
        content: post
      }
    };

    const dialogRef = this.dialog.open(SacerdotesComponent, config);
    dialogRef.afterClosed().subscribe( result => {
      console.log(`dialogo ${result}`);
    });

  }

}
