import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { PapaI } from './models/papa.interface';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from 'rxjs/operators';
import { FilePapaI } from './models/file.interface';

@Injectable({
  providedIn: 'root'
})
export class PapaService {

  private papaCollection: AngularFirestoreCollection<PapaI>;
  private filePach: any;
  private descargarURL: Observable<string>;

  constructor(private storage: AngularFireStorage,
              private afs: AngularFirestore) { 

    this.papaCollection = afs.collection<PapaI>('papa');
  }


  public getAllPosts(): Observable<PapaI[]> {

    return this.papaCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as PapaI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );

  }


  public editPapaById(post: PapaI, newImage?: FilePapaI) {

    if (newImage) {
      this.uploadImage(post, newImage);

    } else {

      return this.papaCollection.doc(post.id).update(post);

    }


  }

  public addImage(post: PapaI, image: FilePapaI): void {

    this.uploadImage(post, image);

  }


  private savePapa(post: PapaI) {

    const postObj = {

      namePost: post.namePost,
      imgPost: this.descargarURL,
      fileRef: this.filePach,

    };

    if (post.id) {
      return this.papaCollection.doc(post.id).update(postObj);
    } else {
      
      // enviamos a firebase
      return this.papaCollection.add(postObj);
    }

  }

  private uploadImage(post: PapaI, image: FilePapaI) {

    this.filePach = `sacerdotes/papa/${image.name}`;
    const fileRef = this.storage.ref(this.filePach);
    const task = this.storage.upload(this.filePach, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.descargarURL = urlImage;
            // console.log('IMAGE', urlImage);
            // console.log('POST', post );
            this.savePapa(post);
          });
        })
      ).subscribe();
  }
}

