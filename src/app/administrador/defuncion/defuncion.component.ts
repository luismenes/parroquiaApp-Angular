import { Component, OnInit } from '@angular/core';
import { DefuncionService } from '../../services/defuncion.service';
import { DefuncionModel } from '../../models/defuncion.model';

@Component({
  selector: 'app-defuncion',
  templateUrl: './defuncion.component.html',
  styles: []
})
export class DefuncionComponent implements OnInit {

  defuncion: DefuncionModel[] = [];
  cargando = false;

  constructor(private defuncionService: DefuncionService) { }

  ngOnInit() {


    this.cargando = true;
    this.defuncionService.getDefunciones()
      .subscribe( resp => {

        this.defuncion = resp;
        this.cargando = false;
      });
  }

}
