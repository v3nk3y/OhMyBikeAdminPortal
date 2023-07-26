import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bike } from '../../models/bike.model';
import { BikeService } from '../../services/bike.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bike-edit',
  templateUrl: './bike-edit.component.html',
  styleUrls: ['./bike-edit.component.scss']
})
export class BikeEditComponent {
  bikeForm: FormGroup;
  imageUrl: string | null;
  bikeTypes: string[] = ['Kids', 'City', 'Electric', 'Mountain', 'Road', 'Cruiser'];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BikeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bike,
    private bikeService: BikeService,
    private snackBar: MatSnackBar
  ) {
    this.bikeForm = this.formBuilder.group({
      title: [data.title, Validators.required],
      description: [data.description, Validators.required],
      qty: [data.qty, [Validators.required, Validators.min(0)]],
      price: [data.price, [Validators.required, Validators.min(0)]],
      type: [data.type, Validators.required],
      rating: [data.rating, [Validators.required, Validators.min(0), Validators.max(5)]],
      picture: [data.picture]
    });
    this.imageUrl = this.data.picture || null; 
  }

  updateBike(): void {
    if (this.bikeForm.valid) { 
      const updatedBike: Bike = this.bikeForm.value;
      this.bikeService.updateBike(this.data.id, updatedBike).subscribe(() => {
        this.snackBar.open('Bike updated successfully.', 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000
        });
        this.dialogRef.close();
      });
    }
  }

  // Method to handle file input for re-uploading the image
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
     // Close the dialog without saving any changes
    this.dialogRef.close();
  }
}
