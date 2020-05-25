import { Component, OnInit, Input } from '@angular/core';
import { InfoSolteriaI } from '../models/solteria.interface';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InfoSolteriaService } from '../info-solteria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarinfo-solteria',
  templateUrl: './editarinfo-solteria.component.html',
  styleUrls: ['./editarinfo-solteria.component.css']
})
export class EditarinfoSolteriaComponent implements OnInit {

  @Input() post: InfoSolteriaI;

  public editInfoForm = new FormGroup({

    id: new FormControl('', Validators.required),
    informacion: new FormControl('', Validators.required),

  });

  constructor(private infoSolteriaService: InfoSolteriaService) { }

  ngOnInit() {

    this.initValuesForm();
  }


  editInfo(post: InfoSolteriaI) {

    // console.log('img', this.imagen);
    // console.log('ImgOriginal', this.imagenOrig);

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.infoSolteriaService.editInfoById(post);

    Swal.fire({

      icon: 'success',
      title: 'Actualizado',
      text: `Informacion de Certificado de Solteria,  Actualizada con Exito`
    });


  }

  private initValuesForm(): void {

    this.editInfoForm.patchValue({

      id: this.post.id,
      informacion: this.post.informacion,

    });

  }
}
