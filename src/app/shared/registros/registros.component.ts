import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styles: []
})
export class RegistrosComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor( private auth: AuthService,
              private router: Router ) { }

  ngOnInit() {

    // this.usuario.nombre = 'Luis David Mendoza';
    // this.usuario.email = 'luis@gmail.com';
    // this.usuario.password = 'Luisdavidmendoza';
  }

  enviarSubmit( form: NgForm){

    if (form.invalid) { return; }

     // utilizamos sweetAlert2 para las alertas en formularios! es necesio hacer las instalaciones necesarias 

    Swal.fire({
      icon: 'info',
      text: 'Espere por favor',
      allowOutsideClick: false
    });
    Swal.showLoading();

    // console.log('Formulario Enviado');
    // console.log(this.usuario);
    // console.log(form);

    // llamamos el metodo que se encuentra en el servicio
    this.auth.nuevoUsuario( this.usuario)
      .subscribe(resp => {

        console.log(resp);
        // Swal.close();

        Swal.fire({
          icon: 'success',
          title: 'Exito al autenticar',
          text: 'autenticacion exitosa'
        });

        if (this.recordarme) {

          localStorage.setItem('email', this.usuario.email);

        }
        // con esta linea de codigo se redirecciona luego de realizar las validaciones
        this.router.navigateByUrl('/home');

      }, (err) => {

        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error.error.message
        });

      });
  }

}
