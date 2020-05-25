import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-confirmacion',
  templateUrl: './info-confirmacion.component.html',
  styleUrls: ['./info-confirmacion.component.css']
})
export class InfoConfirmacionComponent implements OnInit {

  constructor(public dialog: MatDialogRef<InfoConfirmacionComponent>,

    @Inject(MAT_DIALOG_DATA) public data: string 

    ) {}

  ngOnInit() {
  }

}
