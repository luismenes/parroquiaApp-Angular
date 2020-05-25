import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { InfoSolteriaService } from '../info-solteria.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoSolteriaI } from '../models/solteria.interface';
import Swal from 'sweetalert2';
import { InfoSolteriaComponent } from '../info-solteria/info-solteria.component';

@Component({
  selector: 'app-tabla-info-solteria',
  templateUrl: './tabla-info-solteria.component.html',
  styleUrls: ['./tabla-info-solteria.component.css']
})
export class TablaInfoSolteriaComponent implements OnInit {

  displayedColumns: string[] = ['position', 'informacion', 'actions'];
  dataSource = new MatTableDataSource();


  constructor(private infoSolteriaService: InfoSolteriaService, public dialog: MatDialog) { }

  ngOnInit() {

    this.infoSolteriaService.getAllPosts().subscribe(solteriainfo => this.dataSource.data = solteriainfo);
  }

  deleteInfo(post: InfoSolteriaI) {
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

        this.infoSolteriaService.deleteInfoById(post);

        Swal.fire(
          'Eliminado!',
          `La Informacion fue eliminada con exito.`,
          'success'
        );

      }
    });

  }

  editInfo(post: InfoSolteriaI) {

    console.log('Editando Post', post);
    this.openDialog(post);
  }

  newInfo() {

    this.openDialog();

  }

  openDialog(post?: InfoSolteriaI): void {
    const config = {
      data: {
        message: post ? `Editar Información` : 'Nueva Informacion',
        content: post
      }
    };

    const dialogRef = this.dialog.open(InfoSolteriaComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`dialogo ${result}`);
    });

  }

}
