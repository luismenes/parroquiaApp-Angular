import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-matrimonio',
  templateUrl: './info-matrimonio.component.html',
  styleUrls: ['./info-matrimonio.component.css']
})
export class InfoMatrimonioComponent implements OnInit {

  constructor(public dialog: MatDialogRef<InfoMatrimonioComponent>,

    @Inject(MAT_DIALOG_DATA) public data: string 

    ) {}

  ngOnInit() {
  }

}
