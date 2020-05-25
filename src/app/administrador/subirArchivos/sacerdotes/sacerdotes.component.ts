import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sacerdotes',
  templateUrl: './sacerdotes.component.html',
  styles: []
})
export class SacerdotesComponent implements OnInit {

  constructor(public dialog: MatDialogRef<SacerdotesComponent>,

    @Inject(MAT_DIALOG_DATA) public data: string 

    ) {}

  ngOnInit() {
  }

}
