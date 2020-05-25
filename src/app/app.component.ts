import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './shared/navbar/navbar.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sesionIniciada = false;

  static cerrarSession: Subject<boolean> = new Subject();

  constructor( private router: Router){

    AppComponent.cerrarSession.subscribe( resp => {

      this.sessionCerrada();
      console.log('suscrp 3');
    });

    this.sessionCerrada();

  }

  sessionCerrada(){



  }

 
}
