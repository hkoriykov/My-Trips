import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  // tripList!: ITrip[];

  tripList: Observable<any[]>;

  // testData = [
  //   {
  //     name: 'Thailand..',
  //     localCurrency: 'Euro',
  //     url: '../../../../assets/thailand.jpg',
  //   },
  //   {
  //     name: 'Barcelona..',
  //     localCurrency: 'Euro',
  //     url: '../../../../assets/barcelona.jpg',
  //   },
  //   {
  //     name: 'Lisboa..',
  //     localCurrency: 'Euro',
  //     url: '../../../../assets/lisboa.jpg',
  //   },
  //   {
  //     name: 'Dubai..',
  //     localCurrency: 'Euro',
  //     url: '../../../../assets/dubai.jpg',
  //   },
  // ];

  constructor(public db: AngularFireDatabase) {
    this.tripList = db.list('trips').valueChanges();
  }
}
