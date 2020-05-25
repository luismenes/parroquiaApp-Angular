import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { EditorDatosService } from '../../services/editor-datos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PosCabeceraModelI } from '../../models/editorDatos.interface';


@Component({
  selector: 'app-editor-datos',
  templateUrl: './editor-datos.component.html',
  styles: []
})
export class EditorDatosComponent implements OnInit{

  @Input() post: PosCabeceraModelI;

  public editCabeceraForm = new FormGroup({

    id         : new FormControl('', Validators.required),
    parroquia  : new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),

  });

  constructor( private editorDatosService: EditorDatosService){

  }

  ngOnInit(){

    this.initValuesForm();

  }

  editCabecera(post: PosCabeceraModelI){

    // console.log('img', this.imagen);
    // console.log('ImgOriginal', this.imagenOrig);

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.editorDatosService.editCabeceraById(post);

    Swal.fire({

      icon: 'success',
      title: 'Actualizado',
      text: ` Parroquia ${post.parroquia},  Actualizada con Exito`
    });


  }


  private initValuesForm (): void {

    this.editCabeceraForm.patchValue({

      id        : this.post.id,
      parroquia  : this.post.parroquia,
      descripcion: this.post.descripcion

    });

  }




}


