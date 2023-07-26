import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../models/bike.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bike-add',
  templateUrl: './bike-add.component.html',
  styleUrls: ['./bike-add.component.scss'],
})
export class BikeAddComponent {
  bikeForm: FormGroup;
  imageUrl: string | null = null;
  bikeTypes: string[] = ['Kids', 'City', 'Electric', 'Mountain', 'Road', 'Cruiser'];

  constructor(
    private dialogRef: MatDialogRef<BikeAddComponent>,
    private fb: FormBuilder,
    private bikeService: BikeService,
    private snackBar: MatSnackBar
  ) {
    this.bikeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      picture: [''],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      price: ['', [Validators.required, Validators.min(0)]],
      qty: ['', [Validators.required, Validators.min(0)]],
      type: ['', Validators.required],
    });
  }

  addBike(): void {
    if (this.bikeForm.valid) {
      const newBike: Bike = this.bikeForm.value;
      this.bikeService.addBike(newBike).subscribe(() => {
        this.snackBar.open('Bike added successfully.', 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000
        });
        this.dialogRef.close();
      });
    }
  }

  // Method to handle file input
  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Create a FileReader to read the file and generate the URL
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.imageUrl = reader.result as string; // Set the image URL
        this.bikeForm.get('picture')?.setValue(this.imageUrl); // Update the 'picture' form control with the image URL
      };
    }
  }

  // Method to delete the picture
  deletePicture(): void {
    // Set the imageUrl and picture form control to null or empty string
    this.imageUrl = null;
    this.bikeForm.get('picture')?.setValue(null);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
