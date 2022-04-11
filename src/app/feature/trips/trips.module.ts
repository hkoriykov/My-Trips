import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsRoutingModule } from './trips-routing.module';
import { TripsNewPageComponent } from './trips-new-page/trips-new-page.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { TripDetailPageComponent } from './trip-detail-page/trip-detail-page.component';
import { TripListItemComponent } from './trip-list-item/trip-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TripsNewPageComponent,
    WishlistPageComponent,
    TripDetailPageComponent,
    TripListItemComponent,
  ],
  imports: [CommonModule, TripsRoutingModule, FormsModule],
  exports: [TripListItemComponent],
})
export class TripsModule {}
