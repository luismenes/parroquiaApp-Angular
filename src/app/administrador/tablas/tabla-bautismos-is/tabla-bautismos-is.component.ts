import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { BautismoService } from '../../../services/bautismo.service';
import { BautismoModel } from '../../../models/bautismo.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tabla-bautismos-is',
  templateUrl: './tabla-bautismos-is.component.html',
  styleUrls: []
})
export class TablaBautismosIsComponent implements OnInit, AfterViewInit {

  bautismo: BautismoModel[] = [];
  cargando = false;

  displayedColumns: string[] = ['position', 'nombres', 'apellidos', 'libro', 'folio', 'numero', 'herramientas'];
  dataSource = new MatTableDataSource( );


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private bautismoService: BautismoService) {

   }

  ngOnInit() {


    this.cargando = true;
    this.bautismoService.getBautismos()
      .subscribe(resp => {
        this.dataSource.data = this.bautismo = resp,
        console.log('this.bautismo ', this.bautismo );
        this.cargando = false;

      });


  }
  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  borrarBautismo(bautismo: BautismoModel, i: number) {


    Swal.fire({
      icon: 'question',
      title: '¿Esta Seguro?',
      text: `Esta seguro que quiere eliminar a ${bautismo.nombres} `,
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
          `El bautismo de ${ bautismo.nombres } fue eliminado con exito.`,
          'success'
        );

        //splice borra el registro por el parametro index, sin tener que recargar la pagina
        this.bautismo.splice(i, 1);
        this.dataSource.data = this.bautismo;
        this.bautismoService.borrarBautismo(bautismo.id).subscribe();

      }
    });

  }



}
