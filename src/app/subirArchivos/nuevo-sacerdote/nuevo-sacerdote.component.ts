import { Component, OnInit, Input } from '@angular/core';
import { SacerdotesService } from '../../services/sacerdotes.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PostI } from '../../models/post.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-sacerdote',
  templateUrl: './nuevo-sacerdote.component.html',
  styles: []
})
export class NuevoSacerdoteComponent implements OnInit {

  private imagen: any;

  constructor(private sacerdotesService: SacerdotesService,
              private router: Router) { }

  public newSacerdForm = new FormGroup({

    namePost  : new FormControl('', Validators.required),
    inicioPost: new FormControl('', Validators.required),
    salidaPost: new FormControl('', Validators.required),
    imgPost   : new FormControl('', Validators.required),

  });

  ngOnInit() {
  }

  newSacert(data: PostI) {


    if (this.newSacerdForm.invalid) { return; }

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

     // console.log('nuevo Post', data);
    this.sacerdotesService.addImage(data, this.imagen);

    Swal.fire({

      icon: 'success',
      title: 'Registrado',
      text: 'Sacerdote guardado con Exito'
    });

    this.router.navigateByUrl('/sacerdotes');

  }

  cargarImg(event: any): void {

    this.imagen = event.target.files[0];

  }

}
