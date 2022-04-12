import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsRoutingModule } from './trips-routing.module';
import { TripsNewPageComponent } from './trips-new-page/trips-new-page.component';
import { TripDetailPageComponent } from './trip-detail-page/trip-detail-page.component';
import { TripListItemComponent } from './trip-list-item/trip-list-item.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    TripsNewPageComponent,
    TripDetailPageComponent,
    TripListItemComponent,
  ],
  imports: [CommonModule, TripsRoutingModule, FormsModule, FontAwesomeModule],
  exports: [TripListItemComponent],
})
export class TripsModule {}
