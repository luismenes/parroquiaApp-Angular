import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { BautismoService } from '../../services/bautismo.service';

import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-bautismo',
  templateUrl: './bautismo.component.html',
  styles: []
})
export class BautismoComponent implements OnInit {

  forma: FormGroup;
  existeregistro = false;

  bautismo = {

    id       : '',
    nombres  : '',
    apellidos: '',
    libro    : '',
    folio    : '',
    numero   : ''

  };


  constructor( private fb: FormBuilder,
               private bautismoService: BautismoService,
               private route: ActivatedRoute,
               private router: Router ) {

    this.crearFormulario();
  }

  get nombresNoValidos(){

    return this.forma.get('nombres').invalid && this.forma.get('nombres').touched;
  }

  get apellidosNoValidos(){

    return this.forma.get('apellidos').invalid && this.forma.get('apellidos').touched;
  }

  get libroNoValido(){

    return this.forma.get('libro').invalid && this.forma.get('libro').touched;
  }

  get folioNoValido(){

    return this.forma.get('folio').invalid && this.forma.get('folio').touched;
  }

  get numeroNoValido(){

    return this.forma.get('numero').invalid && this.forma.get('numero').touched;
  }


  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo') {


      this.bautismoService.getBautismo(id)
            .subscribe( (resp: any) => {

            this.bautismo = resp;
            this.bautismo.id = id;
            this.existeregistro = true;


       } );
    }


  }

  crearFormulario(){

    this.forma = this.fb.group({

      id       : [''],
      nombres  : ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      libro    : ['', Validators.required],
      folio    : ['', Validators.required],
      numero   : ['', Validators.required]

    });


  }


  guardar(form: NgForm){

    if (form.invalid) { return; }

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    if (this.bautismo.id) {

      this.bautismoService.actualizarBautismo( this.bautismo )
      .subscribe( resp => {
        Swal.fire({
          icon: 'success',
          title: 'Actualizado',
          text: 'Bautismo actualizado con Exito'
        });

      });

      this.router.navigateByUrl('/partidasadmin/bautismos');

    } else {


      this.bautismoService.crearBautismo( this.bautismo )
      .subscribe( resp => {

        Swal.fire({
          icon: 'success',
          title: 'Registrado',
          text: 'Bautismo registrado con Exito'
        });

      });

      this.router.navigateByUrl('/partidasadmin/bautismos');

    }

  }

}
