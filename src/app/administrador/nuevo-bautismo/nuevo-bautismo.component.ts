import { Component, OnInit } from '@angular/core';
import { BautismoService } from '../../services/bautismo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-bautismo',
  templateUrl: './nuevo-bautismo.component.html',
  styleUrls: ['./nuevo-bautismo.component.css']
})
export class NuevoBautismoComponent implements OnInit {


  constructor() { }


  ngOnInit() {
  }

 
}
