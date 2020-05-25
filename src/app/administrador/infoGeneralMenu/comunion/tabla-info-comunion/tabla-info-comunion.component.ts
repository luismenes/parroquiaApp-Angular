import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { InfoComunionService } from '../info-comunion.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoComunionI } from '../models/comunion.interface';
import Swal from 'sweetalert2';
import { InfoComunionComponent } from '../info-comunion/info-comunion.component';

@Component({
  selector: 'app-tabla-info-comunion',
  templateUrl: './tabla-info-comunion.component.html',
  styleUrls: ['./tabla-info-comunion.component.css']
})
export class TablaInfoComunionComponent implements OnInit {

  displayedColumns: string[] = ['position', 'informacion', 'actions'];
  dataSource = new MatTableDataSource();


  constructor(private infoComunionService: InfoComunionService, public dialog: MatDialog) { }

  ngOnInit() {

    this.infoComunionService.getAllPosts().subscribe( comunioninfo => this.dataSource.data = comunioninfo);
  }

  deleteInfo(post: InfoComunionI){
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

        this.infoComunionService.deleteInfoById(post);

        Swal.fire(
          'Eliminado!',
          `La Informacion fue eliminada con exito.`,
          'success'
        );

      }
    });

  }

  editInfo(post: InfoComunionI){
    
    console.log('Editando Post', post);
    this.openDialog(post);
  }

  newInfo(){

    this.openDialog();

  }

  openDialog(post?: InfoComunionI): void {
    const config = {
      data:{
        message: post ? `Editar Información` : 'Nueva Informacion',
        content: post
      }
    };

    const dialogRef = this.dialog.open(InfoComunionComponent, config);
    dialogRef.afterClosed().subscribe( result => {
      console.log(`dialogo ${result}`);
    });

  }

}
