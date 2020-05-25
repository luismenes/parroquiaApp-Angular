import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-comunion',
  templateUrl: './info-comunion.component.html',
  styleUrls: ['./info-comunion.component.css']
})
export class InfoComunionComponent implements OnInit {

  constructor(public dialog: MatDialogRef<InfoComunionComponent>,

    @Inject(MAT_DIALOG_DATA) public data: string 

    ) {}


  ngOnInit() {
  }

}
