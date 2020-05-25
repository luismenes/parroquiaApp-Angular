import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConfirmacionModel } from '../models/confirmacion.model';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacionService {

  private url = 'https://loginparromomil.firebaseio.com';

  constructor(private http: HttpClient ) { }

  crearConfirmacion( confirmacion ){

    const confirmacionTemp1 = {
      ...confirmacion
    };

    delete confirmacionTemp1.id;

    return this.http.post(`${this.url}/confirmacion.json`, confirmacionTemp1 )
     .pipe(
       map( (resp: any) => {
         confirmacion.id = resp.name;
         return confirmacion;
       })
     );

  }

  actualizarConfirmacion( confirmacion ){

    const confirmacionTemp = {
      ...confirmacion
    };

    delete confirmacionTemp.id;

    return this.http.put(`${ this.url}/confirmacion/${ confirmacion.id }.json`, confirmacionTemp);

  }

  borrarConfirmacion( id: string ){

    return this.http.delete(`${ this.url }/confirmacion/${ id }.json`);

  }

  getConfirmacion( id: string ){

    return this.http.get(`${ this.url }/confirmacion/${ id }.json`);

  }

  getConfirmaciones(){

    return this.http.get(`${ this.url }/confirmacion.json`)
        .pipe(
          map( this.crearArregloConfirmacion)
        );

  }

  private crearArregloConfirmacion( confirmacionObj: object ){

    const confirmaciones: ConfirmacionModel[] = [];

    if (confirmacionObj === null) { return []; }

    Object.keys(confirmacionObj).forEach( key => {

      const confirmacion: ConfirmacionModel = confirmacionObj[key];
      confirmacion.id = key;

      confirmaciones.push ( confirmacion );


    });

    return confirmaciones ;

  }
}
