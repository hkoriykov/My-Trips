import { Component, OnInit } from '@angular/core';
import { ITrip } from 'src/app/core/interfaces';
import { TripService } from 'src/app/core/trip.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  tripList!: ITrip[];

  testData = [
    {
      tripName: 'Thailand..',
      url: '../../../../assets/thailand.jpg',
    },
    {
      tripName: 'Barcelona..',
      url: '../../../../assets/barcelona.jpg',
    },
    {
      tripName: 'Lisboa..',
      url: '../../../../assets/lisboa.jpg',
    },
    {
      tripName: 'Dubai..',
      url: '../../../../assets/dubai.jpg',
    },
  ];

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.tripList = this.testData;

    //TODO: loadTripList
    // this.tripService.loadTripList().subscribe((tripList) => {
    //   this.tripList = tripList;
    // });
  }
}
