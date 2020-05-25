import { Component, OnInit } from '@angular/core';
import { ConfirmacionService } from '../../services/confirmacion.service';
import { ConfirmacionModel } from 'src/app/models/confirmacion.model';

@Component({
  selector: 'app-confirmaciones',
  templateUrl: './confirmaciones.component.html',
  styles: []
})
export class ConfirmacionesComponent implements OnInit {

  confirmacion: ConfirmacionModel[] = [];
  cargando = false;

  constructor( private confirmacionService: ConfirmacionService) { }

  ngOnInit() {
    
    this.cargando = true;
    this.confirmacionService.getConfirmaciones()
      .subscribe(resp => {

        this.confirmacion = resp;
        this.cargando = false;

      });
  }

}
