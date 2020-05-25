import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { ObispoI } from '../models/obispo.interface';
import { ObispoComponent } from '../obispo/obispo.component';
import { ObispoService } from '../obispo.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla-obispo',
  templateUrl: './tabla-obispo.component.html',
  styleUrls: ['./tabla-obispo.component.css']
})
export class TablaObispoComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['namePost', 'actions'];
  dataSource = new MatTableDataSource();


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  applyFilter(filterValue: string) {

      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor( private obispoService: ObispoService, public dialog: MatDialog) { }

  ngOnInit() {

    this.obispoService.getAllPosts().subscribe( obispo => this.dataSource.data = obispo);
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  editObispo(post: ObispoI ){
    console.log('Editando Obispo', post);
    this.openDialog(post);

  }

  newObispo(){

    this.openDialog();

  }

  openDialog(post?: ObispoI): void {
    const config = {
      data:{
        message: post ? `Editar ${post.namePost}` : 'Nuevo Monseñor',
        content: post
      }
    };

    const dialogRef = this.dialog.open(ObispoComponent, config);
    dialogRef.afterClosed().subscribe( result => {
      console.log(`dialogo ${result}`);
    });

  }

}
