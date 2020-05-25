import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styles: []
})
export class CabeceraComponent implements OnInit {

  constructor(public dialog: MatDialogRef<CabeceraComponent>,

    @Inject(MAT_DIALOG_DATA) public data: string 
        
        ) { }

  ngOnInit() {
  }
}
