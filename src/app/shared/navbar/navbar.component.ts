import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from 'src/app/models/usuario.model';

import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  sesionIniciada = false;
  userToken: string;
  static activarSession: Subject<boolean> = new Subject();

  constructor(private auth: AuthService,
              private router: Router) {

    NavbarComponent.activarSession.subscribe(resp => {

      this.sesionActiva();

    });

    this.sesionActiva();

  }

  ngOnInit() {


  }

  sesionActiva() {


    if (localStorage.getItem('token')) {

      this.sesionIniciada = true;


    } else {

      this.sesionIniciada = false;
      this.router.navigateByUrl('/login');


    }

  }


  salir() {

    Swal.fire({
      icon: 'question',
      title: '¿Esta Seguro?',
      text: 'Esta seguro que quiere cerrar sesión?',
      allowOutsideClick: false,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Cerrar!'
    }).then(resp => {

      if (resp.value) {

        Swal.fire(
          'Cerrada!',
          'Sesión Finalizada.',
          'success'
        );

        this.auth.salirLogin();
        this.auth.leerToken();
        this.sesionActiva();


      }
    });

  }

}
