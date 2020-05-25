import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { InfoSolteriaI } from './models/solteria.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoSolteriaService {

  private solteriaInfoCollection: AngularFirestoreCollection<InfoSolteriaI>;


  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {

    this.solteriaInfoCollection = afs.collection<InfoSolteriaI>('solteriainfo');
  }

  public getAllPosts(): Observable<InfoSolteriaI[]> {

    return this.solteriaInfoCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as InfoSolteriaI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );

  }

  public deleteInfoById(post: InfoSolteriaI) {

    this.solteriaInfoCollection.doc(post.id).delete();

  }


  // editar o actualizar datos
  public editInfoById(post: InfoSolteriaI) {

    return this.solteriaInfoCollection.doc(post.id).update(post);


  }

  public addInfo(post: InfoSolteriaI): void {

    this.uploadInfo(post);

  }


  private saveInfo(post: InfoSolteriaI) {

    const postObj = {

      informacion: post.informacion

    };

    if (post.id) {
      return this.solteriaInfoCollection.doc(post.id).update(postObj);
    } else {

      // enviamos a firebase
      return this.solteriaInfoCollection.add(postObj);
    }

  }

  // con este metodo, Firebase nos arrojara la URL que utilizatemos
  private uploadInfo(post: InfoSolteriaI) {

    this.saveInfo(post);
  }
}
