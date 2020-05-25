import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { InfoBautismoI } from './models/bautismo.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoBautismoService {

  
  private bautimsoInfoCollection: AngularFirestoreCollection<InfoBautismoI>;
  

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {

    this.bautimsoInfoCollection = afs.collection<InfoBautismoI>('bautismoinfo');
  }

  public getAllPosts(): Observable<InfoBautismoI[]> {

    return this.bautimsoInfoCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as InfoBautismoI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );

  }

  public deleteInfoById(post: InfoBautismoI) {

    this.bautimsoInfoCollection.doc(post.id).delete();

  }


  // editar o actualizar datos
  public editInfoById(post: InfoBautismoI) {

    return this.bautimsoInfoCollection.doc(post.id).update(post);


  }

  public addInfo(post: InfoBautismoI): void {

    this.uploadInfo(post);

  }


  private saveInfo(post: InfoBautismoI) {

    const postObj = {

      informacion: post.informacion

    };

    if (post.id) {
      return this.bautimsoInfoCollection.doc(post.id).update(postObj);
    } else {
      
      // enviamos a firebase
      return this.bautimsoInfoCollection.add(postObj);
    }

  }

  // con este metodo, Firebase nos arrojara la URL que utilizatemos
  private uploadInfo(post: InfoBautismoI) {

    this.saveInfo(post);
  }

  
}
