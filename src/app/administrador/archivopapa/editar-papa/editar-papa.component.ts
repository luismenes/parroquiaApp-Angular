import { Component, OnInit, Input } from '@angular/core';
import { PapaI } from '../models/papa.interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PapaService } from '../papa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-papa',
  templateUrl: './editar-papa.component.html',
  styleUrls: ['./editar-papa.component.css']
})
export class EditarPapaComponent implements OnInit {

  private imagen: any;
  private imagenOrig: any;

  @Input() post: PapaI;

  public editPapaForm = new FormGroup({

    id        : new FormControl('', Validators.required),
    namePost  : new FormControl('', Validators.required),
    imgPost   : new FormControl('', Validators.required),

  });

  constructor(private papaService: PapaService) { }

  ngOnInit() {

    this.imagen = this.post.imgPost;
    this.imagenOrig = this.post.imgPost;
    this.initValuesForm();
  }


  editPapa(post: PapaI){

    // console.log('img', this.imagen);
    // console.log('ImgOriginal', this.imagenOrig);

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    if (this.imagen === this.imagenOrig) {

      post.imgPost = this.imagenOrig;
      this.papaService.editPapaById(post);

    } else {

      this.papaService.editPapaById(post, this.imagen);

    }

    Swal.fire({

      icon: 'success',
      title: 'Actualizado',
      text: `Su Santidad Papa ${post.namePost},  Actualizado con Exito`
    });


  }


  cargarImg(event: any): void{

    this.imagen = event.target.files[0];

  }

  private initValuesForm (): void {

    this.editPapaForm.patchValue({

      id        : this.post.id,
      namePost  : this.post.namePost,

    });

  }

}
