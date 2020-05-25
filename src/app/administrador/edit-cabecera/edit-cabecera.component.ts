import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EditorDatosService } from '../../services/editor-datos.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PosCabeceraModelI } from '../../models/editorDatos.interface';
import { EditorDatosComponent } from '../editor-datos/editor-datos.component';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-cabecera',
  templateUrl: './edit-cabecera.component.html',
  styles: []
})
export class EditCabeceraComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['parroquia', 'descripcion', 'actions'];
  dataSource = new MatTableDataSource();
  public cabecera$  : Observable<PosCabeceraModelI[]>;

  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {

      this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private editorDatosService: EditorDatosService, public dialog: MatDialog) { }

  ngOnInit() {

    this.editorDatosService.getAllPosts().subscribe( cabecera => this.dataSource.data = cabecera);
    this.cabecera$   =  this.editorDatosService.getAllPosts();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  editCabecera(post: PosCabeceraModelI ){
    console.log('Editando cabecera', post);
    this.openDialog(post);

  }


  openDialog(post?: PosCabeceraModelI): void {
    const config = {
      data:{
        message: post ? `Editar ${post.parroquia}` : 'Nueva Parroquia',
        content: post
      }
    };

    const dialogRef = this.dialog.open(CabeceraComponent, config);
    dialogRef.afterClosed().subscribe( result => {
      console.log(`dialogo ${result}`);
    });

  }

}
