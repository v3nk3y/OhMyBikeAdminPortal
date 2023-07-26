import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BikeCardComponent } from './bike-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BikeCardComponent', () => {
  let component: BikeCardComponent;
  let fixture: ComponentFixture<BikeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule, 
        MatDialogModule, 
        MatSnackBarModule, 
        FormsModule, 
        ReactiveFormsModule, 
        MatSelectModule, 
        MatInputModule,
        MatCardModule
      ],
      declarations: [BikeCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(BikeCardComponent);
    component = fixture.componentInstance;
    // Set the value for the bike input property
    component.bike = {
      id: 'bike-id',
      title: 'Bike Title',
      description: 'Bike Description',
      qty: 5,
      price: 1000,
      type: 'Mountain Bike',
      rating: 4.5,
      picture: 'test-picture',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
