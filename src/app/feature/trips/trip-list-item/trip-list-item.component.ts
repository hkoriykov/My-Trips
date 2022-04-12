import { Component, Input } from '@angular/core';
import { ITrip } from 'src/app/core/interfaces';

@Component({
  selector: 'app-trip-list-item',
  templateUrl: './trip-list-item.component.html',
  styleUrls: ['./trip-list-item.component.css'],
})
export class TripListItemComponent {
  @Input() trip!: ITrip;

  constructor() {}
}
