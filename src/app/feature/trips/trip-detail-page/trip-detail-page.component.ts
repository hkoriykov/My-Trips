import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITrip } from 'src/app/core/interfaces';
import { TripService } from 'src/app/core/services/trip/trip.service';
import { faSackDollar, faLanguage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trip-detail-page',
  templateUrl: './trip-detail-page.component.html',
  styleUrls: ['./trip-detail-page.component.css'],
})
export class TripDetailPageComponent implements OnInit {
  trip: ITrip = {} as ITrip;
  faSackDollar = faSackDollar;
  faLanguage = faLanguage;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripService
  ) {}

  ngOnInit(): void {
    const tripId = this.activatedRoute.snapshot.params['tripId'];

    this.tripService.getTripById(tripId).subscribe((trip) => {
      this.trip = trip;
      console.log(trip);
    });
  }
}
