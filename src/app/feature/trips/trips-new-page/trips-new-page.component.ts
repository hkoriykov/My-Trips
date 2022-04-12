import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/core/models/file-upload';
import { FileUploadService } from 'src/app/core/services/file-upload/file-upload.service';
import { TripService } from 'src/app/core/services/trip/trip.service';

@Component({
  selector: 'app-trips-new-page',
  templateUrl: './trips-new-page.component.html',
  styleUrls: ['./trips-new-page.component.css'],
})
export class TripsNewPageComponent {
  @ViewChild('tripForm') tripForm!: NgForm;
  errorMessage!: any;

  selectedFiles?: FileList;
  currentFileUpload!: FileUpload;
  percentage!: number;

  constructor(
    private tripService: TripService,
    private uploadService: FileUploadService,
    private router: Router
  ) {}

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
