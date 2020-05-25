import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { InfoConfirmacionI } from './models/confirmacion.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoConfirmacionService {

  private confirmacionInfoCollection: AngularFirestoreCollection<InfoConfirmacionI>;
  

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {

    this.confirmacionInfoCollection = afs.collection<InfoConfirmacionI>('confirmacioninfo');
  }

  public getAllPosts(): Observable<InfoConfirmacionI[]> {

    return this.confirmacionInfoCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as InfoConfirmacionI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );

  }

  public deleteInfoById(post: InfoConfirmacionI) {

    this.confirmacionInfoCollection.doc(post.id).delete();

  }


  // editar o actualizar datos
  public editInfoById(post: InfoConfirmacionI) {

    return this.confirmacionInfoCollection.doc(post.id).update(post);


  }

  public addInfo(post: InfoConfirmacionI): void {

    this.uploadInfo(post);

  }


  private saveInfo(post: InfoConfirmacionI) {

    const postObj = {

      informacion: post.informacion

    };

    if (post.id) {
      return this.confirmacionInfoCollection.doc(post.id).update(postObj);
    } else {
      
      // enviamos a firebase
      return this.confirmacionInfoCollection.add(postObj);
    }

  }

  // con este metodo, Firebase nos arrojara la URL que utilizatemos
  private uploadInfo(post: InfoConfirmacionI) {

    this.saveInfo(post);
  }
}
