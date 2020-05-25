import { Component, OnInit } from '@angular/core';
import { InfoSolteriaService } from '../info-solteria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InfoSolteriaI } from '../models/solteria.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevainfo-solteria',
  templateUrl: './nuevainfo-solteria.component.html',
  styleUrls: ['./nuevainfo-solteria.component.css']
})
export class NuevainfoSolteriaComponent implements OnInit {

  constructor(private infoSolteriaService: InfoSolteriaService) { }

  public newInfoForm = new FormGroup({

    informacion: new FormControl('', Validators.required)

  });

  ngOnInit() {
  }

  newInfo(data: InfoSolteriaI) {


    if (this.newInfoForm.invalid) { return; }

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.infoSolteriaService.addInfo(data);

    Swal.fire({

      icon: 'success',
      title: 'Registrado',
      text: 'Informacion guardada con Exito'
    });


  }

}
