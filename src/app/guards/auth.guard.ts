import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private  auth: AuthService,
              private router: Router) { }

  canActivate(): boolean  {
    //  si esta autenticado dejara ir a la direccionpuesta en la barra, sino por defecto ira al login
    if ( this.auth.estaAutenticado() ) {

      return true;

    } else {

      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
