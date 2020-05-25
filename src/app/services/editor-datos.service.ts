import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { PosCabeceraModelI } from '../models/editorDatos.interface';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class EditorDatosService {

  private cabeceraCollection: AngularFirestoreCollection<PosCabeceraModelI>;
  private filePach: any;
  private descargarURL: Observable<string>;

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {

    this.cabeceraCollection = afs.collection<PosCabeceraModelI>('cabecera');
  }

  public getAllPosts(): Observable<PosCabeceraModelI[]> {

    return this.cabeceraCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as PosCabeceraModelI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );

  }


  // editar o actualizar datos
  public editCabeceraById(post: PosCabeceraModelI) {

    return this.cabeceraCollection.doc(post.id).update(post);


  }

 


  private saveCabecera(post: PosCabeceraModelI) {

    const postObj = {

      parroquia: post.parroquia,
      descripcion: post.descripcion

    };

    if (post.id) {
      return this.cabeceraCollection.doc(post.id).update(postObj);
    } else {
      
      // enviamos a firebase
      return this.cabeceraCollection.add(postObj);
    }

  }

  // con este metodo, Firebase nos arrojara la URL que utilizatemos
  private uploadImage(post: PosCabeceraModelI) {

    this.saveCabecera(post);
  }
}
