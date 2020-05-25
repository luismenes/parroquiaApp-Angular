import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { ConfirmacionModel } from 'src/app/models/confirmacion.model';
import { ConfirmacionService } from '../../../services/confirmacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tablas-confirmacion',
  templateUrl: './tablas-confirmacion.component.html',
  styles: []
})
export class TablasConfirmacionComponent implements OnInit, AfterViewInit {

  confirmacion: ConfirmacionModel[] = [];
  cargando = false;

  displayedColumns: string[] = ['position', 'nombres', 'apellidos', 'libro', 'folio', 'numero', 'herramientas'];
  dataSource = new MatTableDataSource( );


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private confirmacionService: ConfirmacionService) { }

  ngOnInit() {
    this.cargando = true;
    this.confirmacionService.getConfirmaciones()
      .subscribe(resp => {
        this.dataSource.data = this.confirmacion = resp,
        console.log('this.confirmacion ', this.confirmacion );
        this.cargando = false;

      });
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  
  borrarConfirmacion(confirmacion: ConfirmacionModel, i: number) {


    Swal.fire({
      icon: 'question',
      title: '¿Esta Seguro?',
      text: `Esta seguro que quiere eliminar a ${confirmacion.nombres} `,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Cerrar!'
    }).then(resp => {

      if (resp.value) {

        Swal.fire(
          'Eliminado!',
          `El bautismo de ${ confirmacion.nombres } fue eliminado con exito.`,
          'success'
        );

        //splice borra el registro por el parametro index, sin tener que recargar la pagina
        this.confirmacion.splice(i, 1);
        this.dataSource.data = this.confirmacion;
        this.confirmacionService.borrarConfirmacion(confirmacion.id).subscribe();

      }
    });

  }

}
