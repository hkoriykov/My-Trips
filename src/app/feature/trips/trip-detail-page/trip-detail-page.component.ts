import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITrip } from 'src/app/core/interfaces';
import { TripService } from 'src/app/core/services/trip/trip.service';
import {
  faSackDollar,
  faLanguage,
  faPencil,
  faDeleteLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'app-trip-detail-page',
  templateUrl: './trip-detail-page.component.html',
  styleUrls: ['./trip-detail-page.component.css'],
  animations: [
    trigger('explainerAnim', [
      transition(':enter', [
        query(
          '.col',
          [
            style({ opacity: 0, transform: 'translateX(-40px)' }),
            stagger('300ms', [
              animate(
                '600ms 1.2s ease-out',
                style({ opacity: 1, transform: 'translateX(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class TripDetailPageComponent implements OnInit {
  get isLogged(): boolean {
    return this.authenticationService.isLogged;
  }

  trip: ITrip = {} as ITrip;
  tripId!: string;

  faSackDollar = faSackDollar;
  faLanguage = faLanguage;
  faPencil = faPencil;
  faDeleteLeft = faDeleteLeft;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.tripId = this.activatedRoute.snapshot.params['tripId'];

    this.tripService.getTripById(this.tripId).subscribe((trip) => {
      this.trip = trip;
    });
  }

  editTrip() {
    this.router.navigate(['/trips/edit', this.tripId]);
  }

  deleteTrip() {
    if (confirm('Are you sure you want to delete this item ?')) {
      this.tripService.deleteTrip(this.tripId);
      this.router.navigate(['/home']);
    }
  }
}
