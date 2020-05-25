import { Component, OnInit, Input } from '@angular/core';
import { InfoMatrimonioI } from '../models/matrimonio.interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { InfoMatrimonioService } from '../info-matrimonio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarinfo-matrimonio',
  templateUrl: './editarinfo-matrimonio.component.html',
  styleUrls: ['./editarinfo-matrimonio.component.css']
})
export class EditarinfoMatrimonioComponent implements OnInit {

  @Input() post: InfoMatrimonioI;

  public editInfoForm = new FormGroup({

    id        : new FormControl('', Validators.required),
    informacion  : new FormControl('', Validators.required),

  });

  constructor(private infoMatrimonioService: InfoMatrimonioService) { }

  ngOnInit() {

    this.initValuesForm();
  }


  editInfo(post: InfoMatrimonioI){

    // console.log('img', this.imagen);
    // console.log('ImgOriginal', this.imagenOrig);

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.infoMatrimonioService.editInfoById(post);

    Swal.fire({

      icon: 'success',
      title: 'Actualizado',
      text: `Informacion de Matrimonio,  Actualizada con Exito`
    });


  }

  private initValuesForm (): void {

    this.editInfoForm.patchValue({

      id        : this.post.id,
      informacion  : this.post.informacion,

    });

  }

}
