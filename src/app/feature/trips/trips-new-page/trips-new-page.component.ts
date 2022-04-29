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
  errorMessage!: unknown;

  currentFileUpload!: FileUpload;
  percentage!: number;
  fileToUpload?: File;

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
      if (this.currentFileUpload) {
        this.tripForm.value.imageUrl = this.currentFileUpload.url;
      } else {
        this.tripForm.value.imageUrl = '/assets/no-image-found.png';
      }

      this.tripService.addTrip(this.tripForm.value);
      this.router.navigate(['/trips']);
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
      this.router.navigate(['/trips']);
    } catch (error) {
      console.error(error);
      this.errorMessage = error;
    }
  }

  selectFile(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.fileToUpload = input.files![0];
  }

  upload(): void {
    this.currentFileUpload = new FileUpload(this.fileToUpload!);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      (percentage) => {
        this.percentage = Math.round(percentage!);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateBack() {
    if (this.isEditMode) {
      this.router.navigate(['/trips', this.tripId]);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
