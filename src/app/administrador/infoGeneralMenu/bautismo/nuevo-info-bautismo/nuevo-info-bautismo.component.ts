import { Component, OnInit } from '@angular/core';
import { InfoBautismoService } from '../info-bautismo.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InfoBautismoI } from '../models/bautismo.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-info-bautismo',
  templateUrl: './nuevo-info-bautismo.component.html',
  styleUrls: ['./nuevo-info-bautismo.component.css']
})
export class NuevoInfoBautismoComponent implements OnInit {
  
  
  constructor(private infoBautismoService: InfoBautismoService,
              private router: Router) { }

  public newInfoForm = new FormGroup({

    informacion: new FormControl('', Validators.required)

  });

  ngOnInit() {
  }

  newInfo(data: InfoBautismoI) {


    if (this.newInfoForm.invalid) { return; }

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.infoBautismoService.addInfo(data);

    Swal.fire({

      icon: 'success',
      title: 'Registrado',
      text: 'Informacion guardada con Exito'
    });


  }


}
