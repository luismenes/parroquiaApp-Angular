import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BautismoModel } from '../models/bautismo.model';



@Injectable({
  providedIn: 'root'
})
export class BautismoService {

  private url = 'https://loginparromomil.firebaseio.com';

  constructor( private http: HttpClient) { }

  crearBautismo ( bautismo ){

    const bautismoTemp1 = {
      ...bautismo
    };

    delete bautismoTemp1.id;

    return this.http.post(`${ this.url }/bautismo.json`, bautismoTemp1 )
                .pipe(
                  map ( (resp: any ) => {
                    bautismo.id = resp.name;
                    return bautismo;
                  } )
                );

  }


  actualizarBautismo( bautismo ){

    const bautismoTemp = {
      ...bautismo
    };

    delete bautismoTemp.id;

    return this.http.put(`${ this.url}/bautismo/${ bautismo.id }.json`, bautismoTemp);

  }

  borrarBautismo( id: string ){

    return this.http.delete(`${ this.url }/bautismo/${ id }.json`);

  }

  getBautismo( id: string ){

    return this.http.get(`${ this.url }/bautismo/${ id }.json`);

  }

  getBautismos(){

    return this.http.get(`${ this.url }/bautismo.json`)
        .pipe(
          map( this.crearArregloBautismo)
        );

  }

  // para leer los datos necesitan estar en un arreglo, fireBase no lo hace por esto este metodo

  private crearArregloBautismo ( bautismoObj: object ){

    const bautismos: BautismoModel[] = [];

    if (bautismoObj === null) { return []; }

    Object.keys(bautismoObj).forEach( key => {

      const bautismo: BautismoModel = bautismoObj[key];
      bautismo.id = key;

      bautismos.push ( bautismo );


    });

    return bautismos ;

  }
}
