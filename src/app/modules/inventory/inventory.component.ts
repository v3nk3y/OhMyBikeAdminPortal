import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { Bike } from '../../shared/models/bike.model';
import { BikeService } from '../../shared/services/bike.service';
import { BikeAddComponent } from '../../shared/components/bike-add/bike-add.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit{
  bikeList$!: Observable<Bike[]>;
  constructor(private bikeService: BikeService, private dialog: MatDialog, ) { }
  
  ngOnInit(): void {
    // To get the list of bikes from Firestore via bikeService
    this.bikeList$ = this.bikeService.getAllBikes().pipe(
      map(bikes => {
        // Map the document change action to a Bike object and add the id property to it
        return bikes.map(bike => {
          let bikeData =  bike.payload.doc.data() as Bike;
          bikeData.id = bike.payload.doc.id;
          // Return the bike object with the id property added to it
          return { ...bikeData };
        });
      })
    );
  }

  openAddBikeDialog(): void {
    this.dialog.open(BikeAddComponent, {
      width: '400px',
    });
  }
}
