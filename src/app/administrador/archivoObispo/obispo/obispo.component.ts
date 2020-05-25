import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-obispo',
  templateUrl: './obispo.component.html',
  styleUrls: ['./obispo.component.css']
})
export class ObispoComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ObispoComponent>,

@Inject(MAT_DIALOG_DATA) public data: string 
    
    ) { }

  ngOnInit() {
  }

}
