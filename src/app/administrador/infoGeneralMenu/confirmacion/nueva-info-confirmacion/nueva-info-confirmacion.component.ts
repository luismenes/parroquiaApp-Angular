import { Component, OnInit } from '@angular/core';
import { InfoConfirmacionService } from '../info-confirmacion.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InfoConfirmacionI } from '../models/confirmacion.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-info-confirmacion',
  templateUrl: './nueva-info-confirmacion.component.html',
  styleUrls: ['./nueva-info-confirmacion.component.css']
})
export class NuevaInfoConfirmacionComponent implements OnInit {

  constructor(private infoConfirmacionService: InfoConfirmacionService) { }

  public newInfoForm = new FormGroup({

    informacion: new FormControl('', Validators.required)

  });

  ngOnInit() {
  }

  newInfo(data: InfoConfirmacionI) {


    if (this.newInfoForm.invalid) { return; }

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.infoConfirmacionService.addInfo(data);

    Swal.fire({

      icon: 'success',
      title: 'Registrado',
      text: 'Informacion guardada con Exito'
    });


  }

}
