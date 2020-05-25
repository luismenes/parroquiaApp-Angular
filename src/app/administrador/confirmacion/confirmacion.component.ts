import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ConfirmacionService } from '../../services/confirmacion.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styles: []
})
export class ConfirmacionComponent implements OnInit {

  forma: FormGroup;
  existeregistro = false;

  confirmacion = {

    id: '',
    nombres: '',
    apellidos: '',
    libro: '',
    folio: '',
    numero: ''

  };

  constructor(private fb: FormBuilder,
              private confirmacionService: ConfirmacionService,
              private route: ActivatedRoute,
              private router: Router) {


    this.crearFormulario();

  }


  get nombresNoValidos() {

    return this.forma.get('nombres').invalid && this.forma.get('nombres').touched;
  }

  get apellidosNoValidos() {

    return this.forma.get('apellidos').invalid && this.forma.get('apellidos').touched;
  }

  get libroNoValido() {

    return this.forma.get('libro').invalid && this.forma.get('libro').touched;
  }

  get folioNoValido() {

    return this.forma.get('folio').invalid && this.forma.get('folio').touched;
  }

  get numeroNoValido() {

    return this.forma.get('numero').invalid && this.forma.get('numero').touched;
  }


  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {


      this.confirmacionService.getConfirmacion(id)
        .subscribe((resp: any) => {

          this.confirmacion = resp;
          this.confirmacion.id = id;
          this.existeregistro = true;


        });
    }
  }

  crearFormulario() {

    this.forma = this.fb.group({

      id: [''],
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      libro: ['', Validators.required],
      folio: ['', Validators.required],
      numero: ['', Validators.required]

    });


  }

  guardar(form: NgForm) {

    if (form.invalid) { return; }

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    if (this.confirmacion.id) {

      this.confirmacionService.actualizarConfirmacion(this.confirmacion)
        .subscribe(resp => {
          Swal.fire({
            icon: 'success',
            title: 'Actualizado',
            text: 'Confirmacion actualizada con Exito'
          });

        });

      this.router.navigateByUrl('/partidasadmin/confirmaciones');

    } else {

      this.confirmacionService.crearConfirmacion(this.confirmacion)
        .subscribe(resp => {
          Swal.fire({

            icon: 'success',
            title: 'Registrado',
            text: 'Confirmacion registrada con Exito'
          });
        });

      this.router.navigateByUrl('/partidasadmin/confirmaciones');
    }


  }

}
