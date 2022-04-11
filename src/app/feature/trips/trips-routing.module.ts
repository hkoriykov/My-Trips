import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { TripDetailPageComponent } from './trip-detail-page/trip-detail-page.component';
import { TripsNewPageComponent } from './trips-new-page/trips-new-page.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';

const routes: Routes = [
  {
    path: 'wishlist',
    canActivate: [AuthGuard],
    component: WishlistPageComponent,
  },
  {
    path: 'trips/new',
    //canActivate: [AuthGuard],
    component: TripsNewPageComponent,
  },
  {
    path: 'trips/:tripId',
    component: TripDetailPageComponent,
  },
];

export const TripsRoutingModule = RouterModule.forChild(routes);
