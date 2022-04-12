import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { ITrip } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  tripsCollection!: AngularFireList<ITrip>;
  trips!: Observable<any[]>;
  trip!: AngularFireList<ITrip>;

  constructor(public db: AngularFireDatabase) {
    this.tripsCollection = this.db.list('trips');
    this.trips = this.tripsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.val() as ITrip;
          data.id = a.payload.key;
          return data;
        });
      })
    ) as Observable<any[]>;
  }

  getTrips() {
    return this.trips;
  }

  addTrip(trip: ITrip) {
    this.tripsCollection.push(trip);
  }

  getTripById(id: string) {
    return this.db
      .object(`trips/${id}`)
      .snapshotChanges()
      .pipe(map((res) => res.payload.val() as ITrip));
  }
}
