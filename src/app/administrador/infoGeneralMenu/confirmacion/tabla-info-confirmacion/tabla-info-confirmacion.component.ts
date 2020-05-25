import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { InfoConfirmacionService } from '../info-confirmacion.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoConfirmacionI } from '../models/confirmacion.interface';
import Swal from 'sweetalert2';
import { InfoConfirmacionComponent } from '../info-confirmacion/info-confirmacion.component';

@Component({
  selector: 'app-tabla-info-confirmacion',
  templateUrl: './tabla-info-confirmacion.component.html',
  styleUrls: ['./tabla-info-confirmacion.component.css']
})
export class TablaInfoConfirmacionComponent implements OnInit {

  displayedColumns: string[] = ['position', 'informacion', 'actions'];
  dataSource = new MatTableDataSource();


  constructor(private infoConfirmacionService: InfoConfirmacionService, public dialog: MatDialog) { }

  ngOnInit() {

    this.infoConfirmacionService.getAllPosts().subscribe(confirmacioninfo => this.dataSource.data = confirmacioninfo);
  }

  deleteInfo(post: InfoConfirmacionI) {
    console.log('Borrando Post', post);

    Swal.fire({
      icon: 'question',
      title: '¿Esta Seguro?',
      text: `Esta seguro que quiere eliminar la Informacion?`,
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then(resp => {

      if (resp.value) {

        this.infoConfirmacionService.deleteInfoById(post);

        Swal.fire(
          'Eliminado!',
          `La Informacion fue eliminada con exito.`,
          'success'
        );

      }
    });

  }

  editInfo(post: InfoConfirmacionI) {

    console.log('Editando Post', post);
    this.openDialog(post);
  }

  newInfo() {

    this.openDialog();

  }

  openDialog(post?: InfoConfirmacionI): void {
    const config = {
      data: {
        message: post ? `Editar Información` : 'Nueva Informacion',
        content: post
      }
    };

    const dialogRef = this.dialog.open(InfoConfirmacionComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`dialogo ${result}`);
    });

  }

}
