import { Component, OnInit } from '@angular/core';
import { InfoComunionService } from '../info-comunion.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InfoComunionI } from '../models/comunion.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-info-comunion',
  templateUrl: './nueva-info-comunion.component.html',
  styleUrls: ['./nueva-info-comunion.component.css']
})
export class NuevaInfoComunionComponent implements OnInit {


  constructor(private infoComunionService: InfoComunionService,
              private router: Router) { }

  public newInfoForm = new FormGroup({

    informacion: new FormControl('', Validators.required)

  });

  ngOnInit() {
  }

  newInfo(data: InfoComunionI) {


    if (this.newInfoForm.invalid) { return; }

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.infoComunionService.addInfo(data);

    Swal.fire({

      icon: 'success',
      title: 'Registrado',
      text: 'Informacion guardada con Exito'
    });


  }


}
