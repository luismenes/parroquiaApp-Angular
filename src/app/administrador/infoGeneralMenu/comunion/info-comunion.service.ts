import { Injectable } from '@angular/core';
import { InfoComunionI } from './models/comunion.interface';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoComunionService {

  private comunionInfoCollection: AngularFirestoreCollection<InfoComunionI>;
  

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {

    this.comunionInfoCollection = afs.collection<InfoComunionI>('comunioninfo');
  }

  public getAllPosts(): Observable<InfoComunionI[]> {

    return this.comunionInfoCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as InfoComunionI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );

  }

  public deleteInfoById(post: InfoComunionI) {

    this.comunionInfoCollection.doc(post.id).delete();

  }


  // editar o actualizar datos
  public editInfoById(post: InfoComunionI) {

    return this.comunionInfoCollection.doc(post.id).update(post);


  }

  public addInfo(post: InfoComunionI): void {

    this.uploadInfo(post);

  }


  private saveInfo(post: InfoComunionI) {

    const postObj = {

      informacion: post.informacion

    };

    if (post.id) {
      return this.comunionInfoCollection.doc(post.id).update(postObj);
    } else {
      
      // enviamos a firebase
      return this.comunionInfoCollection.add(postObj);
    }

  }

  // con este metodo, Firebase nos arrojara la URL que utilizatemos
  private uploadInfo(post: InfoComunionI) {

    this.saveInfo(post);
  }
}
