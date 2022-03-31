import { Component, Input, OnInit } from '@angular/core';
import { ITrip } from 'src/app/core/interfaces';

@Component({
  selector: 'app-trip-list-item',
  templateUrl: './trip-list-item.component.html',
  styleUrls: ['./trip-list-item.component.css'],
})
export class TripListItemComponent implements OnInit {
  @Input() trip!: ITrip;

  constructor() {}

  ngOnInit(): void {}
}
