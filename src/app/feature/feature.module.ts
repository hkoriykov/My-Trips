import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';

@NgModule({
  declarations: [HomePageComponent, PageNotFoundPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, PageNotFoundPageComponent],
})
export class FeatureModule {}
