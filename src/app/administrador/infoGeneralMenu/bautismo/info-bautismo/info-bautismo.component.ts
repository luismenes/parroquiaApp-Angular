import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-bautismo',
  templateUrl: './info-bautismo.component.html',
  styleUrls: ['./info-bautismo.component.css']
})
export class InfoBautismoComponent implements OnInit {

  constructor(public dialog: MatDialogRef<InfoBautismoComponent>,

    @Inject(MAT_DIALOG_DATA) public data: string 

    ) {}

  ngOnInit() {
  }

}
