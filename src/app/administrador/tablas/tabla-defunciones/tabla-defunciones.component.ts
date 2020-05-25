import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { DefuncionService } from '../../../services/defuncion.service';
import { DefuncionModel } from 'src/app/models/defuncion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-defunciones',
  templateUrl: './tabla-defunciones.component.html',
  styles: []
})
export class TablaDefuncionesComponent implements OnInit, AfterViewInit {

  defuncion: DefuncionModel[] = [];
  cargando = false;

  displayedColumns: string[] = ['position', 'nombres', 'apellidos', 'libro', 'folio', 'numero', 'herramientas'];
  dataSource = new MatTableDataSource( );


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor( private defuncionService: DefuncionService) { }

  ngOnInit() {

    this.cargando = true;
    this.defuncionService.getDefunciones()
    .subscribe(resp => {
      this.dataSource.data = this.defuncion = resp,
      console.log('this.defuncion ', this.defuncion );
      this.cargando = false;

    });
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  borrarDefuncion(defuncion: DefuncionModel, i: number) {


    Swal.fire({
      icon: 'question',
      title: '¿Esta Seguro?',
      text: `Esta seguro que quiere eliminar a ${defuncion.nombres} `,
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
          `El bautismo de ${ defuncion.nombres } fue eliminado con exito.`,
          'success'
        );
        
        this.defuncion.splice(i, 1);
        this.dataSource.data = this.defuncion;
        this.defuncionService.borrarDefuncion(defuncion.id).subscribe();

      }
    });

  }

}
