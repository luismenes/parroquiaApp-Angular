import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { InfoMatrimonioService } from '../info-matrimonio.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoMatrimonioI } from '../models/matrimonio.interface';
import Swal from 'sweetalert2';
import { InfoMatrimonioComponent } from '../info-matrimonio/info-matrimonio.component';

@Component({
  selector: 'app-tabla-info-matrimonio',
  templateUrl: './tabla-info-matrimonio.component.html',
  styleUrls: ['./tabla-info-matrimonio.component.css']
})
export class TablaInfoMatrimonioComponent implements OnInit {

  displayedColumns: string[] = ['position', 'informacion', 'actions'];
  dataSource = new MatTableDataSource();


  constructor(private infoMatrimonioService: InfoMatrimonioService, public dialog: MatDialog) { }

  ngOnInit() {

    this.infoMatrimonioService.getAllPosts().subscribe(matrimonioinfo => this.dataSource.data = matrimonioinfo);
  }

  deleteInfo(post: InfoMatrimonioI) {
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

        this.infoMatrimonioService.deleteInfoById(post);

        Swal.fire(
          'Eliminado!',
          `La Informacion fue eliminada con exito.`,
          'success'
        );

      }
    });

  }

  editInfo(post: InfoMatrimonioI) {

    console.log('Editando Post', post);
    this.openDialog(post);
  }

  newInfo() {

    this.openDialog();

  }

  openDialog(post?: InfoMatrimonioI): void {
    const config = {
      data: {
        message: post ? `Editar Información` : 'Nueva Informacion',
        content: post
      }
    };

    const dialogRef = this.dialog.open(InfoMatrimonioComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`dialogo ${result}`);
    });

  }

}
