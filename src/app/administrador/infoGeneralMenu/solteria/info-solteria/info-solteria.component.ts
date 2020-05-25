import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-solteria',
  templateUrl: './info-solteria.component.html',
  styleUrls: ['./info-solteria.component.css']
})
export class InfoSolteriaComponent implements OnInit {

  constructor(public dialog: MatDialogRef<InfoSolteriaComponent>,

    @Inject(MAT_DIALOG_DATA) public data: string 

    ) {}

  ngOnInit() {
  }

}
