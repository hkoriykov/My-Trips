import { Component, Input, OnInit } from '@angular/core';
import { ITrip } from 'src/app/core/interfaces';

@Component({
  selector: 'app-trip-detail-page',
  templateUrl: './trip-detail-page.component.html',
  styleUrls: ['./trip-detail-page.component.css'],
})
export class TripDetailPageComponent implements OnInit {
  @Input() trip!: ITrip;

  constructor() {}

  ngOnInit(): void {}
}
