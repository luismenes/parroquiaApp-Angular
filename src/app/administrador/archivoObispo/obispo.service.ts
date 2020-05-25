import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { ObispoI } from './models/obispo.interface';
import { FileObispoI } from './models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObispoService {

  private obispoCollection: AngularFirestoreCollection<ObispoI>;
  private filePach: any;
  private descargarURL: Observable<string>;

  constructor(private storage: AngularFireStorage,
              private afs: AngularFirestore) { 

    this.obispoCollection = afs.collection<ObispoI>('obispo');
  }


  public getAllPosts(): Observable<ObispoI[]> {

    return this.obispoCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as ObispoI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );

  }


  public editObispoById(post: ObispoI, newImage?: FileObispoI) {

    if (newImage) {
      this.uploadImage(post, newImage);

    } else {

      return this.obispoCollection.doc(post.id).update(post);

    }


  }

  public addImage(post: ObispoI, image: FileObispoI): void {

    this.uploadImage(post, image);

  }


  private saveSacerd(post: ObispoI) {

    const postObj = {

      namePost: post.namePost,
      imgPost: this.descargarURL,
      fileRef: this.filePach,

    };

    if (post.id) {
      return this.obispoCollection.doc(post.id).update(postObj);
    } else {
      
      // enviamos a firebase
      return this.obispoCollection.add(postObj);
    }

  }

  private uploadImage(post: ObispoI, image: FileObispoI) {

    this.filePach = `sacerdotes/obispo/${image.name}`;
    const fileRef = this.storage.ref(this.filePach);
    const task = this.storage.upload(this.filePach, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.descargarURL = urlImage;
            // console.log('IMAGE', urlImage);
            // console.log('POST', post );
            this.saveSacerd(post);
          });
        })
      ).subscribe();
  }
}
