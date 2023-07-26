import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { Bike } from '../models/bike.model';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private bikeCollection: AngularFirestoreCollection<Bike>;
  // Name of our bike collection in Firestore
  private readonly collectionName = 'bikes';

  constructor(private firestore: AngularFirestore) {
    // Create reference to Firestore collection
    this.bikeCollection = this.firestore.collection<Bike>(this.collectionName);
  }

  // To get list of all biked from Firestore collection
  getAllBikes(): Observable<DocumentChangeAction<Bike>[]> {
    return this.bikeCollection.snapshotChanges();
  }

  // To add a new bike to Firestore collection
  addBike(bike: Bike): Observable<DocumentReference<Bike>> {
    return from(this.bikeCollection.add(bike));
  }

  // To update a bike in Firestore collection
  updateBike(bikeId: string, data: Partial<Bike>): Observable<void> {
    return from(this.bikeCollection.doc(bikeId).update(data));
  }

  // To delete a bike from Firestore collection
  deleteBike(bikeId: string): Observable<void> {
    return from(this.bikeCollection.doc(bikeId).delete());
  }
}
