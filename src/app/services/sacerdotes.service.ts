import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { PostI } from '../models/post.interface';
import { FileI } from '../models/file.interface';
import { AngularFireStorage } from '@angular/fire/storage';





@Injectable({
  providedIn: 'root'
})
export class SacerdotesService {

  private sacerdotesCollection: AngularFirestoreCollection<PostI>;
  private filePach: any;
  private descargarURL: Observable<string>;

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {

    this.sacerdotesCollection = afs.collection<PostI>('sacerdotes');
  }

  public getAllPosts(): Observable<PostI[]> {

    return this.sacerdotesCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as PostI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );

  }

  public deleteSacerdById(post: PostI) {

    this.sacerdotesCollection.doc(post.id).delete();

  }


  // editar o actualizar datos
  public editSacerdById(post: PostI, newImage?: FileI) {

    if (newImage) {
      this.uploadImage(post, newImage);

    } else {

      return this.sacerdotesCollection.doc(post.id).update(post);

    }


  }

  // subir Imagen al Firebase

  public addImage(post: PostI, image: FileI): void {

    this.uploadImage(post, image);

  }

  private saveSacerd(post: PostI) {

    const postObj = {

      namePost: post.namePost,
      inicioPost: post.inicioPost,
      salidaPost: post.salidaPost,
      imgPost: this.descargarURL,
      fileRef: this.filePach,

    };

    if (post.id) {
      return this.sacerdotesCollection.doc(post.id).update(postObj);
    } else {
      
      // enviamos a firebase
      return this.sacerdotesCollection.add(postObj);
    }

  }

  // con este metodo, Firebase nos arrojara la URL que utilizatemos
  private uploadImage(post: PostI, image: FileI) {

    this.filePach = `sacerdotes/${image.name}`;
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
