import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BikeService } from '../../services/bike.service';
import { Bike } from '../../models/bike.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bike-delete',
  templateUrl: './bike-delete.component.html',
  styleUrls: ['./bike-delete.component.scss'],
})
export class BikeDeleteComponent {
  constructor(
    private dialogRef: MatDialogRef<BikeDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Bike,
    private bikeService: BikeService,
    private snackBar: MatSnackBar
  ) {}

  deleteBike(): void {
    this.bikeService.deleteBike(this.data.id).subscribe(() => {
      this.snackBar.open('Bike deleted successfully.', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000
      });
      this.dialogRef.close(true);
    });
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}
