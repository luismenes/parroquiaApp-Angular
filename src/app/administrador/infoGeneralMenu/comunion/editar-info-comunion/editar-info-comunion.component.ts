import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { InfoComunionI } from '../models/comunion.interface';
import { InfoComunionService } from '../info-comunion.service';

@Component({
  selector: 'app-editar-info-comunion',
  templateUrl: './editar-info-comunion.component.html',
  styleUrls: ['./editar-info-comunion.component.css']
})
export class EditarInfoComunionComponent implements OnInit {

  @Input() post: InfoComunionI;

  public editInfoForm = new FormGroup({

    id        : new FormControl('', Validators.required),
    informacion  : new FormControl('', Validators.required),

  });

  constructor(private infoComunionService: InfoComunionService) { }

  ngOnInit() {

    this.initValuesForm();
  }


  editInfo(post: InfoComunionI){

    // console.log('img', this.imagen);
    // console.log('ImgOriginal', this.imagenOrig);

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.infoComunionService.editInfoById(post);

    Swal.fire({

      icon: 'success',
      title: 'Actualizado',
      text: `Informacion de Comunion,  Actualizada con Exito`
    });


  }

  private initValuesForm (): void {

    this.editInfoForm.patchValue({

      id        : this.post.id,
      informacion  : this.post.informacion,

    });

  }
}
