import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PostI } from '../../models/post.interface';
import { SacerdotesService } from '../../services/sacerdotes.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-sacerdote',
  templateUrl: './editar-sacerdote.component.html',
  styles: []
})
export class EditarSacerdoteComponent implements OnInit {

  private imagen: any;
  private imagenOrig: any;

  @Input() post: PostI;

  public editSacerdForm = new FormGroup({

    id        : new FormControl('', Validators.required),
    namePost  : new FormControl('', Validators.required),
    inicioPost: new FormControl('', Validators.required),
    salidaPost: new FormControl('', Validators.required),
    imgPost   : new FormControl('', Validators.required),

  });

  constructor(private sacerdotesService: SacerdotesService,
              private router: Router) { }

  ngOnInit() {

    this.imagen = this.post.imgPost;
    this.imagenOrig = this.post.imgPost;
    this.initValuesForm();
  }

  editSacert(post: PostI){

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
      this.sacerdotesService.editSacerdById(post);

    } else {

      this.sacerdotesService.editSacerdById(post, this.imagen);
      
    }

    Swal.fire({

      icon: 'success',
      title: 'Actualizado',
      text: `Sacerdote ${post.namePost} Actualizado con Exito`
    });

    this.router.navigateByUrl('/sacerdotes');



  }

  cargarImg(event: any): void{

    this.imagen = event.target.files[0];

  }

  private initValuesForm (): void {

    this.editSacerdForm.patchValue({

      id        : this.post.id,
      namePost  : this.post.namePost,
      inicioPost: this.post.inicioPost,
      salidaPost: this.post.salidaPost

    });

  }

}
