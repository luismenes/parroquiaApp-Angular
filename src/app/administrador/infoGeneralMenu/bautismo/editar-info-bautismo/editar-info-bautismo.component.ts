import { Component, OnInit, Input } from '@angular/core';
import { InfoBautismoI } from '../models/bautismo.interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { InfoBautismoService } from '../info-bautismo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-info-bautismo',
  templateUrl: './editar-info-bautismo.component.html',
  styleUrls: ['./editar-info-bautismo.component.css']
})
export class EditarInfoBautismoComponent implements OnInit {

  @Input() post: InfoBautismoI;

  public editInfoForm = new FormGroup({

    id        : new FormControl('', Validators.required),
    informacion  : new FormControl('', Validators.required),

  });

  constructor(private infoBautismoService: InfoBautismoService) { }

  ngOnInit() {

    this.initValuesForm();
  }


  editInfo(post: InfoBautismoI){

    // console.log('img', this.imagen);
    // console.log('ImgOriginal', this.imagenOrig);

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.infoBautismoService.editInfoById(post);

    Swal.fire({

      icon: 'success',
      title: 'Actualizado',
      text: `Informacion de Bautismo,  Actualizada con Exito`
    });


  }

  private initValuesForm (): void {

    this.editInfoForm.patchValue({

      id        : this.post.id,
      informacion  : this.post.informacion,

    });

  }


}
