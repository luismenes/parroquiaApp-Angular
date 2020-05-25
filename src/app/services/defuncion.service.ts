import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DefuncionModel } from '../models/defuncion.model';

@Injectable({
  providedIn: 'root'
})
export class DefuncionService {

  private url = 'https://loginparromomil.firebaseio.com';

  constructor( private http: HttpClient ) { }

  crearDefuncion( defuncion ){

    const defuncionTemp1 = {
      ...defuncion
    };

    delete defuncionTemp1.id;

    return this.http.post(`${ this.url }/defuncion.json`, defuncionTemp1)
    .pipe(
      map((resp: any) => {

        defuncion.id = resp.name;
        return defuncion;

      })
    );

  }

  actualizarDefuncion( defuncion ){

    const defuncionTemp = {
      ...defuncion
    };

    delete defuncionTemp.id;

    return this.http.put(`${ this.url }/defuncion/${defuncion.id}.json`, defuncionTemp);

  }

  borrarDefuncion( id: string){

    return this.http.delete(`${ this.url }/defuncion/${ id }.json`);
  }

  getDefuncion( id: string ){

    return this.http.get(`${ this.url }/defuncion/${ id }.json`);

  }

  getDefunciones(){
    return this.http.get(`${ this.url }/defuncion.json`)
       .pipe(
         map( this.crearArregloDefuncion )
       );
  }

  private crearArregloDefuncion( defuncionObj: object ){

    const defunciones: DefuncionModel[] = [];

    if (defuncionObj === null) { return[]; }

    Object.keys(defuncionObj).forEach( key => {

      const defuncion: DefuncionModel = defuncionObj[key];
      defuncion.id = key;

      defunciones.push ( defuncion );

    });

    return defunciones;

  }
}
