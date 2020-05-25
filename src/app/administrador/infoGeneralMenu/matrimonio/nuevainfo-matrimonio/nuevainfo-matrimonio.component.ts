import { Component, OnInit } from '@angular/core';
import { InfoMatrimonioService } from '../info-matrimonio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InfoMatrimonioI } from '../models/matrimonio.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevainfo-matrimonio',
  templateUrl: './nuevainfo-matrimonio.component.html',
  styleUrls: ['./nuevainfo-matrimonio.component.css']
})
export class NuevainfoMatrimonioComponent implements OnInit {

  constructor(private infoMatrimonioService: InfoMatrimonioService) { }

  public newInfoForm = new FormGroup({

    informacion: new FormControl('', Validators.required)

  });

  ngOnInit() {
  }

  newInfo(data: InfoMatrimonioI) {


    if (this.newInfoForm.invalid) { return; }

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.infoMatrimonioService.addInfo(data);

    Swal.fire({

      icon: 'success',
      title: 'Registrado',
      text: 'Informacion guardada con Exito'
    });


  }


}
