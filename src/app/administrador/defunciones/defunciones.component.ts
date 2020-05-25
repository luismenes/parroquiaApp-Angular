import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DefuncionService } from '../../services/defuncion.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-defunciones',
  templateUrl: './defunciones.component.html',
  styles: []
})
export class DefuncionesComponent implements OnInit {

  forma: FormGroup;
  existeregistro = false;

  defuncion = {

    id       : '',
    nombres  : '',
    apellidos: '',
    libro    : '',
    folio    : '',
    numero   : ''

  };

  constructor( private fb: FormBuilder,
               private defuncionService: DefuncionService,
               private router: Router, 
               private route: ActivatedRoute) { 

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

    if (id !== 'nuevo') {


      this.defuncionService.getDefuncion(id)
        .subscribe((resp: any) => {

          this.defuncion = resp;
          this.defuncion.id = id;
          this.existeregistro = true;
        });
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

    if (this.defuncion.id) {

      this.defuncionService.actualizarDefuncion( this.defuncion )
         .subscribe( resp => {

          Swal.fire({

            icon : 'success',
            title: 'Actualizado',
            text : 'Defuncion actualizada con Exito'

          });

         });

      this.router.navigateByUrl('/partidasadmin/defuncion');


    } else {

      this.defuncionService.crearDefuncion( this.defuncion )
      .subscribe( resp => {

        Swal.fire({
          icon: 'success',
          title: 'Registrado',
          text: 'Defuncion registrada con Exito'
        });

      } );

      this.router.navigateByUrl('/partidasadmin/defuncion');


    }

  }

}
