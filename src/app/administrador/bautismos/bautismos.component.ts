import { Component, OnInit } from '@angular/core';
import { BautismoService } from '../../services/bautismo.service';
import { BautismoModel } from '../../models/bautismo.model';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-bautismos',
  templateUrl: './bautismos.component.html',
  styles: []
})
export class BautismosComponent implements OnInit {

 
  bautismo: BautismoModel[] = [];
  cargando = false;


  constructor(private bautismoService: BautismoService) { }

  ngOnInit() {


    this.cargando = true;
    this.bautismoService.getBautismos()
      .subscribe(resp => {

        this.bautismo = resp;
        this.cargando = false;

      });
  }


}
