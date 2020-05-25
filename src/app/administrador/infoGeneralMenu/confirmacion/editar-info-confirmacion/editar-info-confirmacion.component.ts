import { Component, OnInit, Input } from '@angular/core';
import { InfoConfirmacionI } from '../models/confirmacion.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InfoConfirmacionService } from '../info-confirmacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-info-confirmacion',
  templateUrl: './editar-info-confirmacion.component.html',
  styleUrls: ['./editar-info-confirmacion.component.css']
})
export class EditarInfoConfirmacionComponent implements OnInit {

  @Input() post: InfoConfirmacionI;

  public editInfoForm = new FormGroup({

    id        : new FormControl('', Validators.required),
    informacion  : new FormControl('', Validators.required),

  });

  constructor(private infoConfirmacionService: InfoConfirmacionService) { }

  ngOnInit() {

    this.initValuesForm();
  }


  editInfo(post: InfoConfirmacionI){

    // console.log('img', this.imagen);
    // console.log('ImgOriginal', this.imagenOrig);

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.infoConfirmacionService.editInfoById(post);

    Swal.fire({

      icon: 'success',
      title: 'Actualizado',
      text: `Informacion de Confirmación,  Actualizada con Exito`
    });


  }

  private initValuesForm (): void {

    this.editInfoForm.patchValue({

      id        : this.post.id,
      informacion  : this.post.informacion,

    });

  }

}
