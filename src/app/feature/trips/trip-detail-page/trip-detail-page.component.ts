import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITrip } from 'src/app/core/interfaces';
import { TripService } from 'src/app/core/services/trip/trip.service';
import {
  faSackDollar,
  faLanguage,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trip-detail-page',
  templateUrl: './trip-detail-page.component.html',
  styleUrls: ['./trip-detail-page.component.css'],
})
export class TripDetailPageComponent implements OnInit {
  trip: ITrip = {} as ITrip;
  faSackDollar = faSackDollar;
  faLanguage = faLanguage;
  faPencil = faPencil;

  tripId!: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tripService: TripService
  ) {}

  ngOnInit(): void {
    this.tripId = this.activatedRoute.snapshot.params['tripId'];

    this.tripService.getTripById(this.tripId).subscribe((trip) => {
      this.trip = trip;
      console.log(trip);
    });
  }

  editTrip() {
    this.router.navigate(['/trips/edit', this.tripId]);
    return false;
  }
}
