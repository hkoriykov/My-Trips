import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, startWith, switchMap, tap } from 'rxjs';
import { ITrip } from 'src/app/core/interfaces';
import { TripService } from 'src/app/core/services/trip/trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css'],
})
export class TripListComponent implements OnInit {
  trips!: ITrip[];

  searchControl = new FormControl('');

  constructor(private tripService: TripService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        startWith(''),
        tap((searchTerm) => console.log('searchTerm', searchTerm)),
        switchMap((searchTerm) => this.tripService.getTrips(searchTerm))
      )
      .subscribe((trips) => {
        this.trips = trips;
      });
  }
}
