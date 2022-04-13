import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { ITrip } from 'src/app/core/interfaces';
import { FileUpload } from 'src/app/core/models/file-upload';
import { FileUploadService } from 'src/app/core/services/file-upload/file-upload.service';
import { TripService } from 'src/app/core/services/trip/trip.service';

export const editRoute = 'edit';

@Component({
  selector: 'app-trips-new-page',
  templateUrl: './trips-new-page.component.html',
  styleUrls: ['./trips-new-page.component.css'],
})
export class TripsNewPageComponent implements OnInit {
  @ViewChild('tripForm') tripForm!: NgForm;
  errorMessage!: any;

  selectedFiles?: FileList;
  currentFileUpload!: FileUpload;
  percentage!: number;

  trip: ITrip = {} as ITrip;
  tripId!: string;
  isEditMode: boolean = false;

  constructor(
    private tripService: TripService,
    private uploadService: FileUploadService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isEditMode = this.router.url.includes(editRoute);

    if (this.isEditMode) {
      this.tripId = this.activatedRoute.snapshot.params['tripId'];

      this.tripService.getTripById(this.tripId).subscribe((trip) => {
        this.trip = trip;
      });
    }
  }

  addTrip() {
    try {
      this.tripForm.value.imageUrl = this.currentFileUpload.url;
      this.tripService.addTrip(this.tripForm.value);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
      this.errorMessage = error;
    }
  }

  editTrip() {
    try {
      if (this.currentFileUpload) {
        this.tripForm.value.imageUrl = this.currentFileUpload.url;
      }
      this.tripService.editTrip(this.tripForm.value, this.tripId);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
      this.errorMessage = error;
    }
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles?.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new FileUpload(file!);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      (percentage) => {
        this.percentage = Math.round(percentage!);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
