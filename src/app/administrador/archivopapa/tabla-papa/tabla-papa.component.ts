import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { PapaService } from '../papa.service';
import { MatDialog } from '@angular/material/dialog';
import { PapaI } from '../models/papa.interface';
import { PapaComponent } from '../papa/papa.component';

@Component({
  selector: 'app-tabla-papa',
  templateUrl: './tabla-papa.component.html',
  styleUrls: ['./tabla-papa.component.css']
})
export class TablaPapaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['namePost', 'actions'];
  dataSource = new MatTableDataSource();

  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {

      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor( private papaService: PapaService, public dialog: MatDialog) { }

  ngOnInit() {

    this.papaService.getAllPosts().subscribe( papa => this.dataSource.data = papa);
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  editPapa(post: PapaI ){
    console.log('Editando a su Santidad', post);
    this.openDialog(post);

  }

  newPapa(){

    this.openDialog();

  }

  openDialog(post?: PapaI): void {
    const config = {
      data:{
        message: post ? `Editar ${post.namePost}` : 'Nuevo Monseñor',
        content: post
      }
    };

    const dialogRef = this.dialog.open(PapaComponent, config);
    dialogRef.afterClosed().subscribe( result => {
      console.log(`dialogo ${result}`);
    });

  }

}
