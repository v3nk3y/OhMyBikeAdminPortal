import { Component, Input } from '@angular/core';
import { Bike } from '../../models/bike.model';
import { MatDialog } from '@angular/material/dialog';
import { BikeEditComponent } from '../bike-edit/bike-edit.component';
import { BikeDeleteComponent } from '../bike-delete/bike-delete.component';

@Component({
  selector: 'app-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrls: ['./bike-card.component.scss']
})
export class BikeCardComponent {
  @Input() bike!: Bike;

  constructor(private dialog: MatDialog) {}

  editBike() {
    // Open the dialog to edit the bike
    const dialogRef = this.dialog.open(BikeEditComponent, {
      width: '400px',
      // Pass a copy of the bike data to avoid modifying the original data
      data: { ...this.bike } 
    });
  }

  deleteBike() {
    // Open the dialog to delete the bike
    const dialogRef = this.dialog.open(BikeDeleteComponent, {
      width: '400px',
      // Pass bike data for read access
      data: this.bike,
    });
  }

  getStarRating(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    const stars = [...Array(fullStars).fill('star')];
    if (hasHalfStar) {
      stars.push('star_half');
    }
    stars.push(...Array(emptyStars).fill('star_border'));
  
    return stars;
  }
  
}
