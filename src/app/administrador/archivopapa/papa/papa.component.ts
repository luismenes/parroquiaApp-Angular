import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-papa',
  templateUrl: './papa.component.html',
  styleUrls: ['./papa.component.css']
})
export class PapaComponent implements OnInit {

  constructor(public dialog: MatDialogRef<PapaComponent>,

    @Inject(MAT_DIALOG_DATA) public data: string 
        
        ) { }

  ngOnInit() {
  }

}
