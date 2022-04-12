import { Component, OnInit } from '@angular/core';
import { ITrip } from 'src/app/core/interfaces';
import { TripService } from 'src/app/core/services/trip/trip.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  trips!: ITrip[];

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe((trips) => {
      this.trips = trips;
    });
  }
}
