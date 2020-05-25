import { Component, OnInit, Input } from '@angular/core';
import { ObispoI } from '../models/obispo.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ObispoService } from '../obispo.service';

@Component({
  selector: 'app-editar-obispo',
  templateUrl: './editar-obispo.component.html',
  styleUrls: ['./editar-obispo.component.css']
})
export class EditarObispoComponent implements OnInit {

  private imagen: any;
  private imagenOrig: any;

  @Input() post: ObispoI;

  public editObispoForm = new FormGroup({

    id        : new FormControl('', Validators.required),
    namePost  : new FormControl('', Validators.required),
    imgPost   : new FormControl('', Validators.required),

  });

  constructor( private obispoService: ObispoService) { }

  ngOnInit() {

    this.imagen = this.post.imgPost;
    this.imagenOrig = this.post.imgPost;
    this.initValuesForm();
  }

  editObispo(post: ObispoI){

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
      this.obispoService.editObispoById(post);

    } else {

      this.obispoService.editObispoById(post, this.imagen);
      
    }

    Swal.fire({

      icon: 'success',
      title: 'Actualizado',
      text: `Sr. Obispo ${post.namePost}, Actualizado con Exito`
    });


  }


  cargarImg(event: any): void{

    this.imagen = event.target.files[0];

  }

  private initValuesForm (): void {

    this.editObispoForm.patchValue({

      id        : this.post.id,
      namePost  : this.post.namePost,

    });

  }

}
