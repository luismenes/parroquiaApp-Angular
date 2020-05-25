import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { InfoBautismoService } from '../info-bautismo.service';
import { InfoBautismoI } from '../models/bautismo.interface';
import Swal from 'sweetalert2';
import { InfoBautismoComponent } from '../info-bautismo/info-bautismo.component';

@Component({
  selector: 'app-tabla-info-bautismo',
  templateUrl: './tabla-info-bautismo.component.html',
  styleUrls: ['./tabla-info-bautismo.component.css']
})
export class TablaInfoBautismoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'informacion', 'actions'];
  dataSource = new MatTableDataSource();


  constructor(private infoBautismoService: InfoBautismoService, public dialog: MatDialog) { }

  ngOnInit() {

    this.infoBautismoService.getAllPosts().subscribe( bautismoinfo => this.dataSource.data = bautismoinfo);
  }

  deleteInfo(post: InfoBautismoI){
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

        this.infoBautismoService.deleteInfoById(post);

        Swal.fire(
          'Eliminado!',
          `La Informacion fue eliminada con exito.`,
          'success'
        );

      }
    });

  }

  editInfo(post: InfoBautismoI){
    
    console.log('Editando Post', post);
    this.openDialog(post);
  }

  newInfo(){

    this.openDialog();

  }

  openDialog(post?: InfoBautismoI): void {
    const config = {
      data:{
        message: post ? `Editar Información` : 'Nueva Informacion',
        content: post
      }
    };

    const dialogRef = this.dialog.open(InfoBautismoComponent, config);
    dialogRef.afterClosed().subscribe( result => {
      console.log(`dialogo ${result}`);
    });

  }

}
