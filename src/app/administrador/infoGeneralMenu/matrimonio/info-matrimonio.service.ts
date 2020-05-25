import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { InfoMatrimonioI } from './models/matrimonio.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoMatrimonioService {

  private matrimonioInfoCollection: AngularFirestoreCollection<InfoMatrimonioI>;
  

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {

    this.matrimonioInfoCollection = afs.collection<InfoMatrimonioI>('matrimonioinfo');
  }

  public getAllPosts(): Observable<InfoMatrimonioI[]> {

    return this.matrimonioInfoCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as InfoMatrimonioI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );

  }

  public deleteInfoById(post: InfoMatrimonioI) {

    this.matrimonioInfoCollection.doc(post.id).delete();

  }


  // editar o actualizar datos
  public editInfoById(post: InfoMatrimonioI) {

    return this.matrimonioInfoCollection.doc(post.id).update(post);


  }

  public addInfo(post: InfoMatrimonioI): void {

    this.uploadInfo(post);

  }


  private saveInfo(post: InfoMatrimonioI) {

    const postObj = {

      informacion: post.informacion

    };

    if (post.id) {
      return this.matrimonioInfoCollection.doc(post.id).update(postObj);
    } else {
      
      // enviamos a firebase
      return this.matrimonioInfoCollection.add(postObj);
    }

  }

  // con este metodo, Firebase nos arrojara la URL que utilizatemos
  private uploadInfo(post: InfoMatrimonioI) {

    this.saveInfo(post);
  }
}
